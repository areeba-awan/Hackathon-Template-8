import { defineQuery } from "next-sanity";


export const allproducts = defineQuery(`
        *[_type == "products" && "featured" in tags]{
        _id,
        title,
        "imageUrl": image.asset->url,
        price,
        badge,
        priceWithoutDiscount
     }
`)
export const fourPro = defineQuery(`
    *[_type == "products" && "featured" in tags][0..3]{
    _id,
    title,
    "imageUrl": image.asset->url,
    price,
    badge,
    priceWithoutDiscount
 }
`)