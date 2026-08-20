import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

INPUT_FILE = "/home/dalas/ChatBit/test/PROXYLIST(SOCKS5) (1).txt"
OUTPUT_FILE = "working.txt"

TEST_URL = "https://api.ipify.org?format=json"
TIMEOUT = 7
THREADS = 50


def test_proxy(proxy):
    proxy = proxy.strip()

    if not proxy or ":" not in proxy:
        return None

    proxy_url = "http://" + proxy

    try:
        r = requests.get(
            TEST_URL,
            proxies={
                "http": proxy_url,
                "https": proxy_url
            },
            timeout=TIMEOUT
        )

        if r.status_code == 200:
            return proxy

    except requests.RequestException:
        pass

    return None


def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        proxies = [line.strip() for line in f if line.strip()]

    working = []

    print(f"Testing {len(proxies)} proxies...\n")

    with ThreadPoolExecutor(max_workers=THREADS) as executor:
        futures = [executor.submit(test_proxy, proxy) for proxy in proxies]

        for future in as_completed(futures):
            result = future.result()

            if result:
                working.append(result)
                print(f"[+] WORKING: {result}")
            else:
                print("[-] DEAD")

    with open(OUTPUT_FILE, "a", encoding="utf-8") as f:
        for proxy in working:
            f.write(proxy + "\n")

    print(f"\nDone! Working proxies: {len(working)}")
    print(f"Saved to: {OUTPUT_FILE}")
  


if __name__ == "__main__":
    main()