import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList() {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <Contact />
      </li>
    </ul>
  );
}
