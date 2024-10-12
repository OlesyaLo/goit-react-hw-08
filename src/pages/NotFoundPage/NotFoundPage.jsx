import css from './NotFoundPage.module.css';

export default function NotFoundPage () {
  return (
    <div className={css.notFoundContainer}>
<img
        className={css.notFoundImage}
        src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147736555.jpg?t=st=1728700366~exp=1728703966~hmac=8788d9968d771731cf185be0b708ec5be722cc8b4e03145bcfb403689b77d927&w=740"
        alt="page not found"
      />
    <h2 className={css.notFoundPageText}>
      Sorry, the page is not found
    </h2>
    </div>
  );
};

