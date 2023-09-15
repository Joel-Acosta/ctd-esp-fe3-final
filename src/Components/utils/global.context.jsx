import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";
/* eslint-disable react/prop-types */

export const initialState = {
  theme: "light",
  data: [],
  api: [],
  detailData: {},
};

export const ContextGlobal = createContext(undefined);

const dataFromLocalStorage = () => {
  const localStorageData = JSON.parse(localStorage.getItem("reducerContext"));
  return localStorageData;
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    dataFromLocalStorage
  );

  //Trae la info de users, osea todos los doctores
  useEffect(() => {
    if (state?.api.length === 0) {
      fetchDataFromApi();
    }
  }, [state]);

  // guardar en el localstrorage cuando uno de los valores cambia
  useEffect(() => {
    try {
      localStorage.setItem("reducerContext", JSON.stringify(state));
    } catch (error) {
      console.error("Error storing data in localStorage:", error);
    }
  }, [state]);

  const fetchDataFromApi = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data;

      const action = {
        type: "SET_API",
        payload: data,
      };

      dispatch(action);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  const fetchDetailData = async (id) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = response.data;
      setDetailData(data);
    } catch (error) {
      console.error("Error fetching detail data from API:", error);
      return null;
    }
  };

  const setDetailData = (data) => {
    const action = {
      type: "SET_DETAIL_DATA",
      payload: data,
    };

    dispatch(action);
  };

  const addFavorite = (doctor) => {
    const action = {
      type: "SET_DATA",
      payload: doctor,
    };

    dispatch(action);
  };
  const removeFavorite = (id) => {
    const action = {
      type: "REMOVE",
      payload: id,
    };

    dispatch(action);
  };
  const setTheme = (theme) => {
    const action = {
      type: "SET_THEME",
      payload: theme,
    };

    dispatch(action);
  };

  const value = {
    theme: state.theme,
    data: state.data,
    api: state.api,
    detailData: state.detailData,
    addFavorite,
    removeFavorite,
    setTheme,
    fetchDetailData,
  };

  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};
export const useContextGlobal = () => useContext(ContextGlobal);
