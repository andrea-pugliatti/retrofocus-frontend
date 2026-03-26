import { useEffect, useRef, useState } from "react";

export const useFetch = (url, reqOpt) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const requestIdRef = useRef(0);
  const controllerRef = useRef();

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
        ...(reqOpt || {}),
        signal: controller.signal
      });
      const contentType = res.headers.get("content-type") || "";
      let responseData;

      if (res.status !== 204) {
        responseData = contentType.includes("application/json")
          ? await res.json()
          : await res.text();
      }

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
          data: responseData,
          message:
            responseData?.message ||
            responseData?.error ||
            `Request failed with status ${res.status}.`
        });
      }
    } catch (e) {
      if (e?.name === "AbortError") {
        return;
      }

      if (requestId !== requestIdRef.current) {
        return;
      }

      setIsSuccess(false);
      setData(undefined);
      setError({
        status: undefined,
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
  }, [url, reqOpt]);

  const refetch = () => fetchData();

  return { data, error, isLoading, isSuccess, refetch };
};
