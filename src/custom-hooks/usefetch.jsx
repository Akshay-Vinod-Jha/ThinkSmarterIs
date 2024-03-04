import { useState } from "react";
export const useFetch = async (request, resolve, reject) => {
  const [loading, setLoading] = useState(false);
  setLoading(true);
  try {
    const response = await fetch(request);
    const jsonData = await response.json();
    resolve(jsonData);
  } catch (err) {
    reject(err.message);
  } finally {
    setLoading(false);
  }
  return { loading };
};
