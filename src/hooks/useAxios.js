import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (baseurl) => {
  const [data, setData] = useState([]);

  const addData = async (endpoint) => {
    if (typeof endpoint !== "string") {
      endpoint = "";
    }
    const response = await axios.get(baseurl + endpoint);
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };

  return [data, addData];
};

export default useAxios;
