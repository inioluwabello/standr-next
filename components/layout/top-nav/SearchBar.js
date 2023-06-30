import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../layout.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchBar} style={{ height: "50px" }}>
      <Form.Select
        className={styles.searchBarSelect}
        style={{ marginRight: ".8rem" }}
        size="sm"
      >
        <option>Products</option>
        <option>Categories</option>
      </Form.Select>

      <InputGroup className="mb-3 sb">
        <Form.Control
          className={styles.searchBarElems}
          style={{
            boxShadow: "none !important",
            borderColor: "none !important",
            backgroundColor: "transparent",
          }}
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />
        <FontAwesomeIcon
          style={{
            width: "17px",
            color: "#78808a",
            marginTop: "5px",
          }}
          icon={faSearch}
        />
      </InputGroup>
    </div>
  );
}
