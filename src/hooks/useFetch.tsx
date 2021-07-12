import { useState, useEffect } from "react";

import API from "../API";

// Interface

const useFetch = () => {
  const [start, setStart] = useState<number>();
  const [end, setEnd] = useState<number>();
  const [batchSize, setBatchSize] = useState<number>();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorParams, setErrorParams] = useState<boolean>(false);

  async function fetchData() {
    try {
      setLoading(true);
      const data = await API.fetchParams();
      console.log(data);

      setStart(data.start_index);
      setEnd(data.end_index);
      setBatchSize(data.batch_size);

      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }

  async function createParams(
    start: number | undefined,
    end: number | undefined,
    batchSize: number | undefined
  ) {
    if (start !== undefined && end !== undefined && batchSize !== undefined) {
      const res = await API.createParams(start, end, batchSize);
      console.log(res);
    } else {
      setErrorParams(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    start,
    setStart,
    end,
    setEnd,
    batchSize,
    setBatchSize,
    loading,
    error,
    createParams,
    errorParams, setErrorParams
  };
};

export default useFetch;
