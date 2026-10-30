"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LoaderContextType {
  isLoading: boolean;
  isCompleted: boolean;
}

const LoaderContext = createContext<LoaderContextType>({
  isLoading: true,
  isCompleted: false,
});

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Lock body scroll while loader is visible
    document.body.style.overflow = "hidden";

    // Set timeout to complete the progress and initiate slide-up exit
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
      
      // Delay unmounting until slide-up curtain animation completes
      const completeTimer = setTimeout(() => {
        setIsCompleted(true);
      }, 1100);

      return () => clearTimeout(completeTimer);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading, isCompleted }}>
      {children}
    </LoaderContext.Provider>
  );
};
