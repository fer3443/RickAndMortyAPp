import React, { createContext, useState } from "react";

export const LoaderProvider = createContext();

export const LoaderContext = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderProvider.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderProvider.Provider>
  );
};
