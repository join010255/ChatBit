
from pathlib import Path


ROOT = Path("ChatBit")


# ============================================================
# FOLDERS
# ============================================================

folders = [

    # ==========================
    # BACKEND
    # ==========================

    "backend/src/config",

    "backend/src/controllers",

    "backend/src/middleware",

    "backend/src/models",

    "backend/src/routes",

    "backend/src/services",

    "backend/src/sockets",

    "backend/src/utils",


    # ==========================
    # FRONTEND - EXPO JSX
    # ==========================

    "frontend/app",

    "frontend/app/conversations",

    "frontend/components",

    "frontend/services",

    "frontend/hooks",

    "frontend/store",

    "frontend/utils",
]


# ============================================================
# FILES
# ============================================================

files = [

    # ========================================================
    # BACKEND
    # ========================================================

    "backend/src/server.js",

    "backend/src/app.js",


    # CONFIG

    "backend/src/config/database.js",


    # CONTROLLERS

    "backend/src/controllers/auth.controller.js",

    "backend/src/controllers/user.controller.js",

    "backend/src/controllers/conversation.controller.js",

    "backend/src/controllers/message.controller.js",


    # MIDDLEWARE

    "backend/src/middleware/auth.middleware.js",

    "backend/src/middleware/error.middleware.js",


    # MODELS
    # PostgreSQL queries - NO ORM

    "backend/src/models/user.model.js",

    "backend/src/models/conversation.model.js",

    "backend/src/models/message.model.js",


    # ROUTES

    "backend/src/routes/auth.routes.js",

    "backend/src/routes/user.routes.js",

    "backend/src/routes/conversation.routes.js",

    "backend/src/routes/message.routes.js",


    # SERVICES

    "backend/src/services/auth.service.js",

    "backend/src/services/user.service.js",

    "backend/src/services/conversation.service.js",

    "backend/src/services/message.service.js",


    # SOCKETS

    "backend/src/sockets/socket.js",

    "backend/src/sockets/auth.socket.js",

    "backend/src/sockets/conversation.socket.js",

    "backend/src/sockets/message.socket.js",

    "backend/src/sockets/typing.socket.js",

    "backend/src/sockets/presence.socket.js",


    # UTILS

    "backend/src/utils/jwt.js",

    "backend/src/utils/password.js",


    # BACKEND ROOT

    "backend/.env.example",

    "backend/schema.sql",

    "backend/package.json",


    # ========================================================
    # FRONTEND - EXPO / REACT NATIVE / JSX
    # ========================================================

    # Expo Router

    "frontend/app/_layout.jsx",

    "frontend/app/index.jsx",

    "frontend/app/login.jsx",

    "frontend/app/register.jsx",

    "frontend/app/conversations/index.jsx",

    "frontend/app/conversations/[id].jsx",


    # COMPONENTS

    "frontend/components/Button.jsx",

    "frontend/components/Input.jsx",

    "frontend/components/ConversationItem.jsx",

    "frontend/components/MessageBubble.jsx",

    "frontend/components/TypingIndicator.jsx",

    "frontend/components/OnlineStatus.jsx",


    # SERVICES

    "frontend/services/api.js",

    "frontend/services/socket.js",

    "frontend/services/auth.service.js",

    "frontend/services/conversation.service.js",

    "frontend/services/message.service.js",


    # HOOKS

    "frontend/hooks/useSocket.js",

    "frontend/hooks/useAuth.js",

    "frontend/hooks/useConversations.js",

    "frontend/hooks/useMessages.js",


    # ZUSTAND

    "frontend/store/auth.store.js",

    "frontend/store/chat.store.js",


    # UTILS

    "frontend/utils/storage.js",

    "frontend/utils/constants.js",


    # ========================================================
    # ROOT
    # ========================================================

    "README.md",

    ".gitignore",
]


# ============================================================
# CREATE
# ============================================================

def setup():

    print("\n🚀 Creating ChatBit structure...\n")

    # Create root
    ROOT.mkdir(parents=True, exist_ok=True)

    # Create folders
    for folder in folders:

        path = ROOT / folder

        path.mkdir(
            parents=True,
            exist_ok=True
        )

        print(f"📁 {path}")


    # Create files
    for file in files:

        path = ROOT / file

        path.parent.mkdir(
            parents=True,
            exist_ok=True
        )

        path.touch(
            exist_ok=True
        )

        print(f"📄 {path}")


    print("\n" + "=" * 50)

    print("✅ ChatBit structure created!")

    print("=" * 50)

    print(f"""
📂 Project:

{ROOT.resolve()}

Backend:
    backend/

Frontend:
    frontend/

Frontend uses:
    React Native
    Expo
    Expo Router
    JSX
    NO TypeScript
    NO TSX

Backend:
    Node.js
    Express
    MVC
    Socket.IO
    PostgreSQL / pg
""")


if __name__ == "__main__":
    setup()
