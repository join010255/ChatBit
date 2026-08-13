import { create } from "zustand";
import { saveToken, getToken, removeToken } from "./storage";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,

  login: async (user, token) => {
    await saveToken(token);

    set({
      user,
      token,
      isAuthenticated: true,
    });
  },

  logout: async () => {
    await removeToken();

    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },

  hydrate: async () => {
    const token = await getToken();

    if (token) {
      set({
        token,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      set({
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },
}));