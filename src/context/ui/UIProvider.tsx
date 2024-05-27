"use client";
import { useEffect, useReducer } from "react";
import { UIContext } from './UIContext';
import { UiReducer } from "./UIReducer";
import { IProduct } from "@/interfaces/products.interface";

export interface UiState {
  localStorageProduct: any
}

const UI_INITIAL_STATE: UiState = {
  localStorageProduct: [],
}

export const UIProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(UiReducer, UI_INITIAL_STATE);

  // useEffect(() => {
  //   if (localStorage.getItem("car")) {
  //     let products = JSON.parse(localStorage.getItem("car") ?? "[]");
  //     if (products.length > 0) setLocalStorageProduct(products)
  //     //state.localStorageProduct = JSON.parse(localStorage.getItem("car") ?? "[]")
  //   }
  // }, [])


  const setLocalStorageProduct = (lcoal: IProduct) => {
    console.log("")
    dispatch({ type: "[UI] - setLocalStorageProduct", payload: lcoal })
  };
  const setLocalStorageProductArray = (lcoal: IProduct[]) => {
    console.log("")
    dispatch({ type: "[UI] - setLocalStorageProductArray", payload: lcoal })
  };
  

  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods
        setLocalStorageProduct,
        setLocalStorageProductArray
      }}>
      {children}
    </UIContext.Provider>

  );


};
