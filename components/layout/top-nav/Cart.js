import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
    return (
        <div className="circle circle-bg nav-icon">
            <FontAwesomeIcon style={{color: "#78808a", width: "16px"}} icon={faCartShopping} />
        </div>
    )
}