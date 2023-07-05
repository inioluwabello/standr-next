import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faWarning } from "@fortawesome/free-solid-svg-icons";
import ProductType from "./ProductType";
import { useState } from "react";
import CheckBox from "../utils/CheckBox"

const ProductMiddlePane = ({
  productName,
  productDescr,
  rating,
  ratingCount,
  reviews,
  quantity,
  setQuantity,
  productTypes,
}) => {
  const [selected, setSelected] = useState(productTypes[1].name);
  const [checked, setChecked] = useState(true);
  const handleQuantityAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantitySub = () => {
    setQuantity(quantity == 1 ? 1 : quantity - 1);
  };

  const productTypeList = productTypes.map((productType) => {
    return (
      <div className="mt-3">
      <ProductType
        productType={productType}
        selected={selected}
        setSelected={setSelected}
      />
      </div>
    );
  });

  return (
    <>
      <h6 className="mt-sm-5">
        <a href="#">{productName}</a>
      </h6>
      <h2 className="mt-3 color-pry">{productDescr}</h2>

      <div className="rating">
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "gold", width: "14px" }}
        />
        &nbsp;&nbsp;
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "gold", width: "14px" }}
        />
        &nbsp;&nbsp;
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "gold", width: "14px" }}
        />
        &nbsp;&nbsp;
        <FontAwesomeIcon icon={faStar} style={{ width: "14px" }} />
        &nbsp;&nbsp;
        <FontAwesomeIcon icon={faStar} style={{ width: "14px" }} />
        &nbsp;&nbsp;
        <span className="rate color-pry">{rating}</span>&nbsp;&nbsp;
        <span className="rating-count alt-color">({ratingCount})</span>
        <span className="reviews color-pry">{`${reviews} review${
          reviews > 1 ? "s" : ""
        }`}</span>
      </div>

      <div className="quantity color-pry mt-5">
        <span className="bold">Quantity:</span>
        <div className="qty">
          <input className="qty" value={quantity} />
          <a
            className="qty-btn color-pry"
            style={{
              marginLeft: "-48px",
            }}
            onClick={handleQuantitySub}
          >
            -
          </a>
          <a className="qty-btn color-pry" onClick={handleQuantityAdd}>
            +
          </a>

          <div className="limited gold">
            <FontAwesomeIcon icon={faWarning} style={{ width: "14px" }} />
            &nbsp;&nbsp; Limited quantity available
          </div>
        </div>

        {productTypeList}

        <div className="protection mt-3">
          <CheckBox checked={checked} setChecked={setChecked} />
          {" "} 
          <span style={{position: "relative", top: "2px"}}>2-year protection plan</span>{" "} 
          <span className="bold" style={{position: "relative", top: "2px"}}>14.99{" "} $</span>{" "}

        </div>
      </div>
    </>
  );
};
export default ProductMiddlePane;
