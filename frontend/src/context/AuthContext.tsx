"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { User, LoginPayload, SignupPayload } from "@/types/user";

import { loginUser, signupUser, logoutUser } from "@/services/auth.service";

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

  // Restore logged user

  useEffect(() => {
    const savedUser = localStorage.getItem("campussign_user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  // LOGIN

  const login = async (data: LoginPayload) => {
    try {
      setLoading(true);

      const loggedUser = await loginUser(data);

      localStorage.setItem("campussign_user", JSON.stringify(loggedUser));

      setUser(loggedUser);
    } catch (error) {
      console.error("Login failed:", error);

      throw error;
    } finally {
      setLoading(false);
    }
  };

  // SIGNUP

  const signup = async (data: SignupPayload) => {
    try {
      setLoading(true);

      const newUser = await signupUser(data);

      localStorage.setItem("campussign_user", JSON.stringify(newUser));

      setUser(newUser);
    } catch (error) {
      console.error("Signup failed:", error);

      throw error;
    } finally {
      setLoading(false);
    }
  };

  // LOGOUT

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("campussign_user");

      setUser(null);
    }
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
