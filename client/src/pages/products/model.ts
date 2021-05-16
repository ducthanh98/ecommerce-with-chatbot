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

export interface CartItem {
    product_variant_id:number;
    price:number;
    quantity:number;
}