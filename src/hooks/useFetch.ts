import { useEffect, useRef, useState } from "react";

interface FetchError {
  status?: number;
  data?: string;
  message: string;
}

export const useFetch = <T>(url: string, reqOpt: RequestInit = {}) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<FetchError>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const requestIdRef = useRef(0);
  const controllerRef = useRef<AbortController>(null);

  const fetchData = async () => {
    if (!url) {
      controllerRef.current?.abort();
      setData(undefined);
      setError(undefined);
      setIsLoading(false);
      setIsSuccess(false);
      return;
    }

    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;

    setIsLoading(true);
    setIsSuccess(false);
    setError(undefined);
    setData(undefined);

    try {
      const res = await fetch(url, {
        ...reqOpt,
        signal: controller.signal
      });

      let responseData: T = await res.json();

      if (requestId !== requestIdRef.current || controller.signal.aborted) {
        return;
      }

      if (res.ok) {
        setIsSuccess(true);
        setData(responseData);
        setError(undefined);
      } else {
        setIsSuccess(false);
        setData(undefined);
        setError({
          status: res.status,
          data: undefined,
          message: `Request failed with status ${res.status}.`
        });
      }
    } catch (e) {
      if (e instanceof Error && e.name === "AbortError") {
        return;
      }

      if (requestId !== requestIdRef.current) {
        return;
      }

      setIsSuccess(false);
      setData(undefined);
      setError({
        status: undefined,
        data: undefined,
        message: e instanceof Error ? e.message : "Unexpected request error."
      });
    } finally {
      if (requestId === requestIdRef.current && !controller.signal.aborted) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      controllerRef.current?.abort();
    };
  }, [url]);

  const refetch = () => fetchData();

  return { data, error, isLoading, isSuccess, refetch };
};
