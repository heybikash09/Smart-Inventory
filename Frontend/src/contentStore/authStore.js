import { create } from "zustand";

export const useAuthstore=create((set)=>(
    {
        user:null
    }
))