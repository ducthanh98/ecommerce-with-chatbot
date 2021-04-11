export interface Category {
    activate: boolean;
    created_at: string;
    description: string;
    id: number;
    image: string;
    name: string;
    updated_at: string;
}

export interface Value {
    id: number;
    product_attribute_id: number;
    value: string;
}

export interface GetProductResponse {
    product: Product;
    related_products?: any;
}

export interface ProductAttribute {
    id: number;
    name: string;
    values: Value[];
}

export interface Product {
    activate: boolean;
    category: Category;
    created_at: string;
    description: string;
    id: number;
    images: string[];
    name: string;
    product_attributes: ProductAttribute[];
    updated_at: string;
}
