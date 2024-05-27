export interface ICategory {
  name: string;
  url: string;
}

export interface ImageProducts {
  image: string;
}

export interface IProduct {
  id?: string;
  name?: string;
  category?: ICategory | null;
  images?: ImageProducts[] | null;
  price: string;
  description: string;
  date_registered: string;
  url: string;
  status?: string;
}
