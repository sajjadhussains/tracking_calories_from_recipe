const CooksPreparing = ({ preparings, handleAddCooking }) => {
  console.log(preparings);
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
              <tr key={idx} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{preparing.recipe_name}</td>
                <td>
                  {preparing.preparing_time}
                  <br />
                  minutes
                </td>
                <td>
                  {preparing.calories}
                  <br />
                  calories
                </td>
                <td>
                  <button
                    onClick={() => handleAddCooking(preparing.recipe_id)}
                    className="text-black bg-green-400 px-5 py-3 rounded-[3.125rem]"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CooksPreparing;
