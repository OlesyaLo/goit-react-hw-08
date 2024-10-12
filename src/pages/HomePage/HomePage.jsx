import css from './HomePage.module.css';
export default function HomePage () {
  return (
  <div className={css.homeContainer}>
    <img
        className={css.homeImg}
        src="https://img.freepik.com/free-vector/colorful-workspace-with-isometric-style_23-2147676796.jpg?t=st=1728698590~exp=1728702190~hmac=c3ba9ddbc2ec3d132c28cbb2a173e74c8db037e251e103e878713ed2e10154a2&w=740"
        alt="phone book and workspace"
      />
  <h1 className={css.homeHeader}>Smart Phonebook – Your Personal Contact Manager</h1>;
  <p className={css.homeText}>
  A smarter way to manage your contacts! Customize and organize all your contacts easily in one convenient app.</p>
  </div>
)
};

 
