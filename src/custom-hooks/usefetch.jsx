import { useState } from "react";
export const useFetch = async (request, responseHandler) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  setLoading(true);
  try {
    const response = await fetch(request);
    const jsonData = await response.json();
    responseHandler(jsonData);
    setError(null);
  } catch {
    setError("Oops! somthing went wrong.");
  } finally {
    setLoading(false);
  }
  return { loading, error };
};
