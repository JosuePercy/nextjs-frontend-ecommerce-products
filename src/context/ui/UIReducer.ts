import { IProduct } from "@/interfaces/products.interface";
import { UiState } from "./UIProvider";

type UiActionType = {
  type: string;
  payload: IProduct | IProduct[] | string;
};

export const UiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[UI] - setLocalStorageProduct":
      let localStorageTmp: any = [];

      if (localStorage.getItem("car")) {
        // SI HAY PRODUCTOS, AGREGAME AL LOCALSTORAGE
        localStorageTmp = JSON.parse(localStorage.getItem("car") ?? "[]");
        localStorageTmp.push(action.payload);

        localStorage.setItem("car", JSON.stringify(localStorageTmp));
      } else {
        localStorageTmp = [action.payload];
        localStorage.setItem("car", JSON.stringify(localStorageTmp));
      }

      return {
        ...state,
        localStorageProduct: localStorageTmp,
      };

    case "[UI] - setLocalStorageProductArray":
      localStorage.setItem("car", JSON.stringify(action.payload));

      return {
        ...state,
        localStorageProduct: action.payload,
      };
    case "[UI] - setQueryCategoryContext":
      return {
        ...state,
        queryCategoryContext: action.payload,
      };

    default:
      return state;
  }
};
