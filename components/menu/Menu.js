import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MenuItemMiddle from "./MenuItemMiddle";
import Form from "react-bootstrap/Form";

export default function Menu() {
  return (
    <div
      style={{ background: "white", padding: ".7rem 1rem", marginTop: "2px" }}
    >
      <div className="row" style={{ fontSize: "13px" }}>
        <div className="col-sm-2 col-md-3"style={{color: "#4d535b"}}>
          <a style={{ cursor: "pointer", padding: ".3rem" }}>
            <FontAwesomeIcon icon={faList} style={{ width: "12px" }} />{" "}
            <span style={{ position: "relative", top: "1px" }}>Categories</span>
          </a>
        </div>
        <div className="col-sm-8 col-md-6">
          <MenuItemMiddle />
        </div>
        <div className="col-sm-2 col-md-3">
          <div className="text-right" style={{color: "#78808a"}}>
            
            <FontAwesomeIcon icon={faLocationDot} style={{ width: "12px" }} /> {" "}
            <Form.Select
              className="float-right"
              style={{ 
                width: "155px", 
                border: "none", 
                fontSize: "11px",
                boxShadow: "none" }}
              size="sm"
            >
              <option>United States, Florida</option>
            </Form.Select>
          </div>
        </div>
      </div>
    </div>
  );
}
