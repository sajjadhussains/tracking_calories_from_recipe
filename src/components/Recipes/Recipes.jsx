import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cooks from "./../Cooks/Cooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [preparings, setPreparings] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  const handleAddPreparing = (id) => {
    let isTrue = true;
    preparings.find((item) => {
      if (item.recipe_id === id) {
        isTrue = false;
      }
    });
    if (isTrue) {
      const newPreparings = recipes.find(
        (preparing) => preparing.recipe_id === id
      );
      setPreparings([...preparings, newPreparings]);
    } else {
      toast("Already Exist");
    }
  };
  return (
    <div className="mb-24">
      <ToastContainer />
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

      <div className="md:flex md:justify-between">
        <div className="md:grid md:grid-cols-2 md:w-7/12 gap-6">
          {recipes.map((recipe) => (
            <Recipe
              recipe={recipe}
              key={recipe.recipe_id}
              handleAddPreparing={handleAddPreparing}
              ToastContainer={ToastContainer}
            ></Recipe>
          ))}
        </div>
        <div className="md:w-2/5 border border-[rgba(40, 40, 40, 0.2)] rounded-2xl">
          <Cooks preparings={preparings}></Cooks>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
