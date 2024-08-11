import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="mb-24">
      <div className="flex justify-center mb-12">
        <div className="text-center md:w-4/6">
          <h1 className="text-5xl font-semibold">Our Recipes</h1>
          <p className="text-[rgba(21, 11, 43, 0.6)] mt-6">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.{" "}
          </p>
        </div>
      </div>

      <div className="">
        <div className="md:grid grid-cols-2 md:w-3/5 gap-6">
          {recipes.map((recipe) => (
            <Recipe recipe={recipe} key={recipe.id}></Recipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
