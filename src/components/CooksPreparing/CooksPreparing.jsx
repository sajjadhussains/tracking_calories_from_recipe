const CooksPreparing = ({ preparings }) => {
  return (
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
          {/* row 1 */}
          <tr className="bg-base-200">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>
              <button className="text-black bg-green-400 px-5 py-3 rounded-[3.125rem]">
                Preparing
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CooksPreparing;
