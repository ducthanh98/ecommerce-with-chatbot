export interface Category {
    activate: boolean;
    created_at: string;
    description: string;
    id: number;
    image: string;
    name: string;
    updated_at: string;
}

export interface FetchCategoriesResponse {
    categories: Category[];
}


export interface Product {
    activate: boolean;
    category?: any;
    created_at: string;
    description: string;
    id: number;
    images?: any;
    name: string;
    product_attributes: any[];
    updated_at: string;
}

export interface FetchProductResponse {
    count: number;
    products: Product[];
}


