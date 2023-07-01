import paymentOptions from "../../data/paymentOptions";
const PaymentOptions = ({
  selectedPaymentOption,
  setSelectedPaymentOption,
}) => {
  return paymentOptions.map((paymentOption) => {
    return (
      <>
        <div
          onClick={() => setSelectedPaymentOption(paymentOption.name)}
          className={`sect-4 bg-wh mb-3 ${
            paymentOption.name === selectedPaymentOption ? `sect-selected` : ``
          }`}
        >
          <div className="sect-name" style={{ fontSize: "14px", fontWeight: "500" }}>
            {paymentOption.name}
          </div>
          {paymentOption.desc && <div>{paymentOption.desc}</div>}
        </div>
        {paymentOption.note && <div className="sect-note mb-3">{paymentOption.note}</div>}
      </>
    );
  });
};

export default PaymentOptions;
