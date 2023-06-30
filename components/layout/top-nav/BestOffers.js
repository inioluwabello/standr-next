import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export default function BestOffers() {
  return (
    <div className="best-offers">
      <div className="row">
        <div className="col">
          <Link href="#" className="bo-link">
            <FontAwesomeIcon
              style={{
                width: "13px",
                color: "#78808a",
              }}
              icon={faTag}
            />{" "}
            Best Offers
          </Link>
        </div>
        <div className="col">
          <Link href="#" className="bo-link">
            Sell on Eshop
          </Link>
        </div>
      </div>
    </div>
  );
}
