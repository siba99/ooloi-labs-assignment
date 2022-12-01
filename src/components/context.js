import React from "react";
import { useContext, useState } from "react";
import tableTestData from "../components/data/tableTestData.json";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState(tableTestData);
  const [change, setChange] = useState("ASC");

  // sorting ------

  const sortTable = (elem) => {
    // ASC------
    if (change === "ASC") {
      const sorted = [...data].sort((a, b) => {
        return a[elem] > b[elem] ? 1 : -1;
      });
      setData(sorted);
      setChange("DES");
    }

    if (change === "DES") {
      // DES------
      const sorted = [...data].sort((a, b) => {
        return a[elem] < b[elem] ? 1 : -1;
      });
      setData(sorted);
      setChange("ASC");
    }
  };

  return (
    <>
      <AppContext.Provider value={{ data, sortTable }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
