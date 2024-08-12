import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cooks from "./../Cooks/Cooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [preparings, setPreparings] = useState([]);
  const [cookings, setCookings] = useState([]);

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

  const handleAddCooking = (id) => {
    const newCooking = preparings.find((item) => item.recipe_id === id);
    setCookings((prevCookings) => [...prevCookings, newCooking]);
    const newPreparings = preparings.filter(
      (preparing) => preparing.recipe_id !== id
    );
    setPreparings(newPreparings);
  };
  return (
    <div className="mb-24">
      <ToastContainer />
      <div className="flex justify-center mb-12">
        <div className="text-center md:w-4/6">
          <h1 className="text-5xl font-semibold">Our Recipes</h1>
          <p className="text-[ rgba(21, 11, 43, 0.6)] mt-6">
            Your menu offers a variety of dishes, including Italian classics,
            fresh salads, and flavorful Asian-inspired recipes, all made with
            quality ingredients for a satisfying meal.
          </p>
        </div>
      </div>

      <div className="md:flex md:justify-between md:items-start">
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
        <div className="md:w-2/5 border border-[rgba(40, 40, 40, 0.2)] rounded-2xl pb-10">
          <Cooks
            preparings={preparings}
            handleAddCooking={handleAddCooking}
            cookings={cookings}
          ></Cooks>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
