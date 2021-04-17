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
    product_variants: ProductVariant[];
    updated_at: string;
    min: number;
    max: number;
}

export interface ProductVariant {
    attribute1_id?: number;
    attribute2_id?: number;
    attribute3_id?: number;
    created_at: string;
    id: number;
    name: string;
    price: number;
    product_base_id: number;
    quantity: number;
    updated_at: string;
}

export interface FetchProductResponse {
    count: number;
    products: Product[];
}


