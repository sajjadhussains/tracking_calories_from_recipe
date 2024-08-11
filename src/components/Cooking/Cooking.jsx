import Calculation from "../Calculation/Calculation";

const Cooking = ({ cookings }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookings.map((cooking, idx) => (
              <tr key={cooking.recipe_id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{cooking.recipe_name}</td>
                <td>{cooking.preparing_time} minutes</td>
                <td>{cooking.calories} calories</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Calculation cookings={cookings}></Calculation>
    </div>
  );
};

export default Cooking;
