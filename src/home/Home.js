import React, { useState, useEffect } from "react";
import { listTemperatures } from "../utils/api";

function Routes() {
  const [temps, setTemps] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    listTemperatures(abortController.signal).then(setTemps);
    return () => abortController.abort();
  }, []);

  console.log(temps);

  return (
    <div>
      <h1>Loading</h1>
    </div>
  );
}

export default Routes;
