import { IProduct } from "@/interfaces/products.interface";
import { UiState } from "./UIProvider";

type UiActionType = {
  type: string;
  payload: IProduct | IProduct[] | string;
};

export const UiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[UI] - setLocalStorageProduct":
      let localStorageTmp: IProduct[] = [];

      if (localStorage.getItem("car")) {
        // Obtener los productos actuales del localStorage
        localStorageTmp = JSON.parse(
          localStorage.getItem("car") ?? "[]"
        ) as IProduct[];

        // Verificar si el producto ya existe en el carrito
        const existingProductIndex = localStorageTmp.findIndex(
          (product) => product.id === (action.payload as IProduct).id
        );

        if (existingProductIndex === -1) {
          // Si el producto no existe, añadir al carrito
          localStorageTmp.push(action.payload as IProduct);
        }

        localStorage.setItem("car", JSON.stringify(localStorageTmp));
      } else {
        localStorageTmp = [action.payload as IProduct];
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
