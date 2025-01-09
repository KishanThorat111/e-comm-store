export interface Product {
imageUrl: any;
    _id?: String;
    name: String;
    shortDescription: String;
    description: String;
    price: Number;
    discount: Number;
    images: [String];
    categoryId: String;
    brandId: String;
    isFeatured: boolean;
    isNew: boolean;

} 