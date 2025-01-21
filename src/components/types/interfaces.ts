export interface Product {
    _id: string;
    title: string;
    imageUrl: string;
    price: string;
    priceWithoutDiscount?: string;
    badge?: string;
    inventory?: number;

    category?:{
        title: string
    }
}
  
export interface Category {
    _id: string;
    slug: {
        current: string
    }
    title: string;
    imageUrl: string;
    productCount: number;
}