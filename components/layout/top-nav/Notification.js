import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

export default function Notification() {
    return (
        <div className="circle circle-border nav-icon">
            <FontAwesomeIcon style={{color: "#78808a", width: "16px"}} icon={faBell} />
        </div>
    )
}