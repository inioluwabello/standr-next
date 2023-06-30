import CrumbBar from "../menu/CrumbBar";
import ProductLeftPane from '../ProductPage/ProductLeftPane'
import ProductMiddlePane from '../ProductPage/ProductMiddlePane'
import items from '../../data/product'
import { useState } from "react";

const ProductPage = () => {
    const item = items[0];
    const [quantity, setQuantity] = useState(1);
    return (
        <div style={{
            minHeight: "100vh",
            padding: "1rem",
            fontSize: "11px",
            color: "#78808a"
            }}>
            <CrumbBar category={item.category}
                subCategory={item.subCategory}
                productName={item.productName}
                productCategory={item.productCategory}
                watching={item.watching}
                likes={item.likes}
                bookmarks={item.bookmarks}
            />

            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <ProductLeftPane productImage={item.productImage} />
                </div>
                <div className="col-sm-12 col-md-4">
                    <ProductMiddlePane 
                        productName={item.productName} 
                        productDescr={item.productDescr}
                        rating={item.rating}
                        ratingCount={item.ratingCount}
                        reviews={item.reviews}
                        quantity={quantity}
                        setQuantity = {setQuantity}
                        productTypes={item.productTypes} />
                </div>
                <div className="col-sm-12 col-md-3">

                </div>
            </div>
        </div>


    )
}

export default ProductPage;