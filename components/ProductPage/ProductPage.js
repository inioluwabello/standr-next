import CrumbBar from "../menu/CrumbBar";
import ProductLeftPane from "../ProductPage/ProductLeftPane";
import ProductMiddlePane from "../ProductPage/ProductMiddlePane";
import ProductRightPane from "./ProductRightPane";
import items from "../../data/product";
import { useState } from "react";

const ProductPage = () => {
  const item = items[0];
  const [quantity, setQuantity] = useState(1);
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "1rem",
        fontSize: "11px",
        color: "#78808a",
      }}
    >
      <CrumbBar
        category={item.category}
        subCategory={item.subCategory}
        productName={item.productName}
        productCategory={item.productCategory}
        watching={item.watching}
        likes={item.likes}
        bookmarks={item.bookmarks}
      />

      <div className="row">
        <div className="col-md-4 d-xs-none d-sm-none d-md-block">
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
            setQuantity={setQuantity}
            productTypes={item.productTypes}
          />
        </div>
        <div className="col-sm-12 col-md-4">
          <ProductRightPane productPrice={item.price} />
        </div>
      </div>

      <div className="mt-5">
        <p className="text-center">
          Thanks to {" "}
          <a target="_blank" href="https://dribbble.com/shots/19221700-Eshop-Ecommerce-Marketplace">
            https://dribbble.com/shots/19221700-Eshop-Ecommerce-Marketplace
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
