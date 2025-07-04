"use client";

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { User } from "../Context/AuthContext";

export const useRegister = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { dispatch } = useAuthContext();

  const register = async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    setIsLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setIsLoading(false);
      setError("Password do not match");
      return false;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const json: User & { error?: string } = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error || "Registration failed");
        return false
      }

      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      return true
    } catch (error) {
      setError("Something went wrong");
      setIsLoading(false);
    }
  };
  return { register, isLoading, error };
};


