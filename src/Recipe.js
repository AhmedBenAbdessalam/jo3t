import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <p>
        <img
          className={style.calories_icon}
          src={process.env.PUBLIC_URL + "/calories.svg"}
        />
        {Math.round(calories)}
      </p>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
