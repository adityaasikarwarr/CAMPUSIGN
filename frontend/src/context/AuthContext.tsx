"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { User, LoginPayload, SignupPayload } from "@/types/user";

interface AuthContextType {
  user: User | null;

  loading: boolean;

  login: (data: LoginPayload) => Promise<void>;

  signup: (data: SignupPayload) => Promise<void>;

  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  // Load saved user

  useEffect(() => {
    const savedUser = localStorage.getItem("campussign_user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  // Login

  const login = async (data: LoginPayload) => {
    setLoading(true);

    // Temporary mock user
    // Replace with backend API later

    const mockUser: User = {
      id: "1",

      name: data.role === "STUDENT" ? "Student User" : "Staff User",

      email: data.email,

      role: data.role,
    };

    localStorage.setItem("campussign_user", JSON.stringify(mockUser));

    setUser(mockUser);

    setLoading(false);
  };

  // Signup

  const signup = async (data: SignupPayload) => {
    setLoading(true);

    const newUser: User = {
      id: Date.now().toString(),

      name: data.name,

      email: data.email,

      role: data.role,
    };

    localStorage.setItem("campussign_user", JSON.stringify(newUser));

    setUser(newUser);

    setLoading(false);
  };

  // Logout

  const logout = () => {
    localStorage.removeItem("campussign_user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,

        loading,

        login,

        signup,

        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
