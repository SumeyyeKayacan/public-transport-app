import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          console.log("error");
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log("data looks fine", data);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        console.log("error caught");
        setError(err);
      });
    //
    return () => abortCont.abort();
  }, [url]);

  return { data, error };
};

export default useFetch;
