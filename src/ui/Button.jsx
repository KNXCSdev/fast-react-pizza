import { Link } from "react-router-dom";

function Button({ disabled, children, to, type }) {
  const base =
    "text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-all hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "mt-2 px-4 py-3 md:px-6 md:py-4",
    small: base + " py-2 px-4 md:px-5 md:py-2.5 text-xs ",
    secondary:
      "text-sm inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-all hover:bg-stone-300 focus:bg-stone-300 focus:outline-none hover:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
