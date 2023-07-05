import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import AlternativeProduct from './AlternativeProduct'

const ProductLeftPane = ({productImage}) => {
    return (
        <>
            <img src={productImage} style={{width: "100%", borderRadius: "10px"}} />
            
            <div className="row mt-3">
                <div className="col">
                    {/* <div className="img-items border-grey center">
                        <FontAwesomeIcon icon={faEllipsis} style={{width: "15px"}} />
                    </div> */}
                    <div className="space-between">
                        <div className="img-items border-grey center">
                            <FontAwesomeIcon icon={faEllipsis} style={{width: "15px"}} />
                        </div>
                        <div className="img-items">
                            <img src={productImage} className="br-5" />
                        </div>
                        <div className="img-items">
                            <img src={productImage} className="br-5" />
                        </div>
                        <div className="img-items">
                            <img src={productImage} className="br-5" />
                        </div>
                    </div>
                </div>
              
            </div>

            <AlternativeProduct />
        </>
    )
}

export default ProductLeftPane;