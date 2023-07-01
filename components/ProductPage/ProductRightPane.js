import PaymentOptions from "./PaymentOptions";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const ProductRightPane = ({ productPrice }) => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  return (
    <>
      <div className="bg-wh mt-3 p-3 right-pane">
        <PaymentOptions
          selectedPaymentOption={selectedPaymentOption}
          setSelectedPaymentOption={setSelectedPaymentOption}
        />

        <div className="row">
          <div className="col">
            <p style={{ margin: "0.4rem" }}>Total Amount:</p>
          </div>
          <div className="col">
            <h5 className="text-right">{productPrice} $</h5>
          </div>
        </div>

        <div className="space-between">
          <div className="payment-type border-1 br-5">
            <img src="/images/logos/paypal.png" />
          </div>
          <div className="payment-type border-1 br-5">
            <img
              style={{ width: "32px", marginTop: "4px" }}
              src="/images/logos/stripe.png"
            />
          </div>
          <div className="payment-type border-1 br-5">
            <img
              style={{ width: "32px", marginTop: "4px" }}
              src="/images/logos/visa.png"
            />
          </div>
          <div className="payment-type border-1 br-5">
            <img
              style={{ width: "32px", marginTop: "1px" }}
              src="/images/logos/mastercard.png"
            />
          </div>
          <div className="payment-type border-1 br-5">
            <img
              style={{ width: "32px", marginTop: "4px" }}
              src="/images/logos/apple-pay.png"
            />
          </div>
        </div>

        <div className="d-grid gap-2 mt-3">
          <Button variant="primary">
            <FontAwesomeIcon icon={faCartShopping} width={20} />{" "}
            Add to cart
          </Button>
        </div>
      </div>

      <div className="better-price mt-3 p-3 border-1 br-10" style={{fontWeight: "500"}}>
        <div className="row">
          <div className="col">Have a better price</div>
          <div className="col text-right">
            <a className="link underline">Send offer</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductRightPane;
