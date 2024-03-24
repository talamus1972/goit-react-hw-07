import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import Loader from "../Loader/Loader"

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Loader />      
      <SearchBox />
      <ContactList />
    </div>
  );
}