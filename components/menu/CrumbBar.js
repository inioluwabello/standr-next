import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark, faCodeCompare } from "@fortawesome/free-solid-svg-icons";

const CrumbBar = ({
  category,
  subCategory,
  productCategory,
  watching,
  likes,
  bookmarks,
}) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="crumb">
          <span>{category}</span> / <span>{subCategory}</span> /{" "}
          <span style={{ fontWeight: "bold" }}>{productCategory}</span>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="flex-end">
          <div
            className="bg-wh rd-rec"
            style={{ padding: ".6rem" }}>
            <span className="rd-rec">{watching}</span> people are watching
          </div>
          <div className="bg-wh rd-rec"
            style={{ padding: ".6rem", marginLeft: "1rem" }}>
            <FontAwesomeIcon style={{ width: "12px" }} icon={faHeart} />&nbsp; 
            <span style={{position: "relative", top: "1px"}}>{likes}</span>{" "}
            
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            
            <FontAwesomeIcon style={{ width: "8px" }} icon={faBookmark} />{" "}&nbsp;
            <span style={{position: "relative", top: "1.5px"}}>{bookmarks}</span>
          </div>
          <div className="bg-wh rd-rec"
            style={{ padding: ".6rem .8rem", marginLeft: "1rem" }}>
            <FontAwesomeIcon style={{ width: "14px" }} icon={faCodeCompare} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CrumbBar;
