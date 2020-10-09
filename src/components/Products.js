import React, {useState} from 'react';
import "./Products.css";
import Product from "./Product";
function Products() {
    const [products, setProducts] = useState([
        {id: 0, name: "Iphone XR", price: 999.99, imageUrl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-red-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038669"},
        {id: 1, name: "Samsung S20", price: 1199.99, imageUrl: "https://image-us.samsung.com/us/smartphones/galaxy-s20/business/product/gallery/s20/cloud-blue/X1_Lockup_CloudBlue_600x600_v2.jpg?$bu-pdp-image-desktop-jpg$"},
        {id: 2, name: "Moto G7", price: 649.99, imageUrl: "https://motorolaus.vtexassets.com/arquivos/ids/157651-800-auto?width=800&height=auto&aspect=true"},
        {id: 3, name: "OnePlus 8", price: 559.99, imageUrl: "https://image01.oneplus.net/ebp/202004/04/1-m00-12-94-rb8bwl6iolaarwkaaaiqcqinzlu156.png"},
        {id: 4, name: "Nokia 7 Plus", price: 799.99, imageUrl: "https://img.gkbcdn.com/s3/p/2018-03-14/nokia-7-plus-6-0-inch-4gb-64gb-smartphone-black-1571972294090.jpg"},
        {id: 5, name: "Huawei Mate X2", price: 349.99, imageUrl: "https://www.mobilewithprices.com/products/Huawei-Mate-X2.jpg"},
        {id: 6, name: "Xperia 1", price: 999.99, imageUrl: "https://cdn.dxomark.com/wp-content/uploads/medias/post-50656/sonyyxperia1ii.jpg"},
        {id: 7, name: "Samsung Note 20", price: 1199, imageUrl: "https://images.samsung.com/us/smartphones/galaxy-note20/pdp/gallery/canvas1/Bronze/Gallery-01-C1-Lockup-MysticBronze-1600x1200.jpg?$product-details-jpg$"},
        {id: 8, name: "Google pixel 5", price: 599, imageUrl: "https://9to5google.com/wp-content/uploads/sites/4/2020/10/pixel-5.jpg?quality=82&strip=all"},
        {id: 9, name: "Galaxy Z Flip", price: 1499, imageUrl: "https://www.att.com/catalog/en/idse/Samsung/Samsung%20Galaxy%20Z%20Flip/Mirror%20Black-hero-zoom.png"},

    ]);
    return (
        <div className="products">
            {products.map(product=>(
                <Product key={product.id} id={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl}/>
            ))}
        </div>
    )
}

export default Products
