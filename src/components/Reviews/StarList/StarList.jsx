import css from "./StarList.module.css";

export default function StarList({ reviewRaiting }) {
  console.log(reviewRaiting);

  return (
    <ul className={css.starList}>
      {[...Array(5)].map((_, index) => (
        <li key={index} className={css.colorCtar}>
          {index + 1 <= reviewRaiting ? (
            <svg width="16" height="16" className={css.colorStar}>
              <use href="/public/sprite.svg#icon-star"></use>
            </svg>
          ) : (
            <svg width="16" height="16" className={css.colorStarNon}>
              <use href="/public/sprite.svg#icon-star"></use>
            </svg>
          )}
        </li>
      ))}
    </ul>
  );
}
