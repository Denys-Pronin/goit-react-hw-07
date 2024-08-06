import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filter.name);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <div className={s.wrapper}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
};

export default ContactList;
