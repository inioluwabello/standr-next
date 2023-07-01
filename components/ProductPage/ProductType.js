const ProductType = ({ productType, selected, setSelected }) => {
  return (
    <div
      onClick={() => setSelected(productType.name)}
      className={`sect-4 mb-3 bg-wh ${
        productType.name === selected ? `sect-selected` : ``
      }`}
    >
      <div className="row">
        <div className="col">
          <div className="sect-name" style={{ fontSize: "14px", fontWeight: "500" }}>
            {productType.name}
          </div>
          <div>{productType.desc}</div>
        </div>
        <div className="col">
          <div className="text-right">chice card</div>
          <div className="text-right">description</div>
        </div>
      </div>
    </div>
  );
};

export default ProductType;
