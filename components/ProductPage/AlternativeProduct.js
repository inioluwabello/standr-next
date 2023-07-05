import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeAlt, faMessage, faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const AlternativeProduct = () => {
  return (
    <div className="mt-3 border-rounded p-3 bg-wh" style={{ color: "#424B57" }}>
      <div className="top-alt-prod">
        <div className="">
          <FontAwesomeIcon
            icon={faHomeAlt}
            style={{
              width: " 20px",
              position: "relative",
              top: "-2px",
            }}
          />
          &nbsp;&nbsp;&nbsp;
          <span>Matrix</span>
          &nbsp;&nbsp;
          <span className="rd-rec" style={{ backgroundColor: "#f0f3ff" }}>
            <a href="#">Verified</a>
          </span>
          <div style={{ marginTop: "5px" }}>
            <FontAwesomeIcon
              icon={faStar}
              style={{ width: "16px", marginTop: "-4px", color: "gold" }}
            />
            &nbsp;&nbsp;
            <span>4.5</span>{" "}
            <span className="alt-color" style={{ fontSize: "10px" }}>
              (5670)
            </span>
          </div>
          {/* Tags */}
          <div className="d-lg-none d-xl-block">
            <div className="tags">
              <span className="rd-rec">Woman</span>
              <span className="rd-rec">Body Protection</span>
              <span className="rd-rec">Health</span>
            </div>
          </div>
          <hr />
          <h6 className="mini-header">Have a question?</h6>
          <span className="sub-mini-header">
            Start conversation with seller
          </span>
          <div className="text-right">
            <Button style={{marginTop: "-24px", borderRadius: "10px"}} variant="outline-dark">
            {/* <FontAwesomeIcon
            icon={faMessage}
            style={{
              width: " 20px",
              position: "relative",
              top: "-2px",
            }}
          />  */}
          Live chat</Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternativeProduct;
