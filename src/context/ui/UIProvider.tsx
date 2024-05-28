"use client";
import { useEffect, useReducer } from "react";
import { UIContext } from './UIContext';
import { UiReducer } from "./UIReducer";
import { IProduct } from "@/interfaces/products.interface";

export interface UiState {
  localStorageProduct: any,
  queryCategoryContext: any,
}

const UI_INITIAL_STATE: UiState = {
  localStorageProduct: [],
  queryCategoryContext: "all",
}

export const UIProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(UiReducer, UI_INITIAL_STATE);


  const setLocalStorageProduct = (local: IProduct) => {
    dispatch({ type: "[UI] - setLocalStorageProduct", payload: local })
  };

  const setLocalStorageProductArray = (local: IProduct[]) => {
    dispatch({ type: "[UI] - setLocalStorageProductArray", payload: local })
  };

  const setQueryCategoryContext = (category: string) => {
    dispatch({ type: "[UI] - setQueryCategoryContext", payload: category })
  };
  

  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods
        setLocalStorageProduct,
        setLocalStorageProductArray,
        setQueryCategoryContext
      }}>
      {children}
    </UIContext.Provider>

  );


};
