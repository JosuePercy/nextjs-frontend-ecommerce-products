"use client"

import { IProduct } from "@/interfaces/products.interface";
import { createContext } from "react"


interface ContextProps {
  localStorageProduct: any;
  queryCategoryContext: string;

  /* Methods */
  setLocalStorageProduct: (product: IProduct) => void;
  setLocalStorageProductArray: (product: IProduct[]) => void;
  setQueryCategoryContext: (category: string) => void;
}



export const UIContext = createContext({} as ContextProps);

