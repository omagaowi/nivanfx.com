import { create } from "zustand";
const root = import.meta.env.VITE_ROOT_URI;
const apiKeys = {
  email: import.meta.env.VITE_EMAILAPI,
  api: import.meta.env.VITE_APIKEY,
};

const paystack_secret = import.meta.env.VITE_PAYSTACK_SECRET;

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

const fetchSubscription = async (subCode) => {
   const headers = {
        'Authorization': `Bearer ${paystack_secret}`
    }
  try{
    const respnse = await fetch(`https://api.paystack.co/subscription/${subCode}/manage/link`, {
      method: 'GET',
      headers: headers
    })
    const data = await respnse.json()
    return data
  }catch(err){
    throw err
  }
}

export { root, apiKeys, useAuthStore, fetchSubscription }