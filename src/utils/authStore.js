import { create } from "zustand";
const root = import.meta.env.VITE_ROOT_URI;
const apiKeys = {
  email: import.meta.env.VITE_EMAILAPI,
  api: import.meta.env.VITE_APIKEY,
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