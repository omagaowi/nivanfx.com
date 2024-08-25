import { create } from "zustand";
const root = `http://localhost:4000`;
const apiKeys = {
  email:
    "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",
  api: "nivan_3fe7ff54122f79596e91bdaea73372a09fab1e27",
};

const useAuthStore = create((set) => ({
  token: JSON.parse(localStorage.getItem("nivanUserData"))
    ? JSON.parse(localStorage.getItem("nivanUserData")).token
    : false,
  updateToken: (data) => set((state) => ({ token: data })),
  user: false,
  updateUser: (data) => set((state) => ({ user: data })),
  tokenError: false,
  updateTokenError: (data) => set((state) => ({ tokenError: data })),
  authRedirect: false,
  setAuthRedirect: (data) => set((state) => ({ authRedirect: data }))
}));

export { root, apiKeys, useAuthStore }