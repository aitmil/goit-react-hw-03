import { useState } from "react";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  return (
    <div className={css.container}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
