import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const CheckBox = ({checked, setChecked}) => {
    return (
        <FontAwesomeIcon 
            icon={faCheck} 
            className={`CheckBox ${checked === true ? 'checked' : ''}`}
            onClick={() => { setChecked(!checked) }} />
    )
}

export default CheckBox;