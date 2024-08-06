import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice.js";
import s from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <span>
          <FaUser className={s.icon} />
          {name}
        </span>
        <span>
          <FaPhoneAlt className={s.icon} />
          {number}
        </span>
      </div>
      <button className={s.button} onClick={handleDeleteClick} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
