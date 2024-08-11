const Cooking = ({ preparings }) => {
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
            {preparings.map((preparing, idx) => (
              <tr key={preparing.recipe_id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{preparing.recipe_name}</td>
                <td>{preparing.preparing_time} minutes</td>
                <td>{preparing.calories} calories</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cooking;
