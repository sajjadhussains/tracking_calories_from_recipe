import clock from "../../assets/images/clock.png";
import calorie from "../../assets/images/calorie.png";
import "./Recipe.css";
import PropTypes from "prop-types";

const Recipe = ({ recipe, handleAddPreparing }) => {
  const {
    recipe_id,
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="p-6 border border-[rgba(40, 40, 40, 0.2)] rounded-2xl">
      <div className="">
        <div className="border-b border-[rgba(40, 40, 40, 0.1)] pb-4 mb-6">
          <figure className="w-80 h-52 mb-6 rounded-2xl">
            <img className="w-full h-full" src={recipe_image} alt="" />
          </figure>
          <h3 className="mb-6 font-xl font-semibold">{recipe_name}</h3>
          <p className="card-text-info">{short_description}</p>
        </div>
        <div className="border-b border-[rgba(40, 40, 40, 0.1)]">
          <h3 className="text-lg font-medium">
            Ingredients:{ingredients.length}
          </h3>
          <ul className="list-disc p-4">
            {ingredients.map((item, idx) => (
              <li className="card-text-info" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-5 my-6">
          <div className="flex gap-2">
            <img src={clock} alt="" />
            <p className="bottom-text-info">{preparing_time} min</p>
          </div>
          <div className="flex gap-2">
            <img src={calorie} alt="" />
            <p className="bottom-text-info">{calories} calories</p>
          </div>
        </div>
        <button
          onClick={() => handleAddPreparing(recipe_id)}
          className="text-black bg-green-400 px-5 py-3 rounded-[3.125rem]"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};
Recipe.propTypes = {
  recipe: PropTypes.object,
  handleAddPreparing: PropTypes.func,
};
export default Recipe;
