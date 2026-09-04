import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  age: number;
  studentClass: string;
}

interface AuthState {
  user: User | null;
  login: (name: string, age: number, studentClass: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (name: string, age: number, studentClass: string) => {
        set({ 
          user: { 
            id: Date.now().toString(), 
            name, 
            age,
            studentClass
          } 
        });
      },
      logout: () => set({ user: null }),
    }),
    {
      name: 'braingym-auth',
    }
  )
);
