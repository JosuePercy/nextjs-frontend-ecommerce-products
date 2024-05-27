"use client"

import { IProduct } from "@/interfaces/products.interface";
import { createContext } from "react"


interface ContextProps {
  localStorageProduct: any;

  /* Methods */
  setLocalStorageProduct: (product: IProduct) => void;
  setLocalStorageProductArray: (product: IProduct[]) => void;
}



export const UIContext = createContext({} as ContextProps);

