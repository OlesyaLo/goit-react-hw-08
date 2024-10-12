import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import css from './ContactsPage.module.css';

export default function ContactsPage () {
  return (
    <div className={css.pageContainer}>
      <h1 className={css.pageTitle}>SmartPhonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};


