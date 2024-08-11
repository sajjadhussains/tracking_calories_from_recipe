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

      <div className="md:flex justify-between">
        <div className="md:grid grid-cols-2 md:w-7/12 gap-6">
          {recipes.map((recipe) => (
            <Recipe recipe={recipe} key={recipe.id}></Recipe>
          ))}
        </div>
        <div className="w-2/5 border border-[rgba(40, 40, 40, 0.2)] rounded-2xl">
          <h1>bangladesh 2</h1>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
