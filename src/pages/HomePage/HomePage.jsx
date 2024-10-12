import css from './HomePage.module.css';
export default function HomePage () {
  return (
  <div className={css.homeContainer}>
    <img
        className={css.homeImg}
        src="https://img.freepik.com/premium-vector/concept-illustration-contact-phone-book-apps_108061-1577.jpg"
      />
  <div className={css.textContainer}>
  <h1 className={css.homeHeader}>  Smart<span className={css.homeHeaderSpanColor}>Phonebook </span> <br />
  <span className={css.homeHeaderSpan}>Your Personal <br />Contact Manager</span></h1>
  <p className={css.homeText}>
  A smarter way to manage your contacts! <br /> Customize and organize all your contacts easily in one convenient app.</p>
  </div>
  </div>
)
};

 
