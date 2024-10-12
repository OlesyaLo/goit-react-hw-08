import css from './NotFoundPage.module.css';

export default function NotFoundPage () {
  return (
    <div className={css.notFoundContainer}>
<img
        className={css.notFoundImage}
        src="https://img.freepik.com/premium-vector/page-found-concept-illustration_86161-98.jpg"
        alt="page not found"
      />
    <h2 className={css.notFoundPageText}>
      Sorry, the page is not found
    </h2>
    </div>
  );
};

