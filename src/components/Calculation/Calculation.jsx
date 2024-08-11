import PropTypes from "prop-types";

const Calculation = ({ cookings }) => {
  const totalTime = () => {
    let sum = 0;
    for (let cook of cookings) {
      sum += parseInt(cook.preparing_time);
    }
    return sum;
  };
  const totalCalories = () => {
    let sum = 0;
    for (let cook of cookings) {
      sum += parseInt(cook.calories);
    }
    return sum;
  };
  return (
    <div className="flex justify-end mt-4">
      <div className="w-1/2 flex gap-8 font-medium text-[rgba(40, 40, 40, 0.8)]">
        <div>
          <h2>Total time=</h2>
          <h2>{totalTime()} minutes</h2>
        </div>
        <div>
          <h2>Total calories</h2>
          <h2>={totalCalories()} calories</h2>
        </div>
      </div>
    </div>
  );
};
Calculation.propTypes = {
  cookings: PropTypes.array,
};
export default Calculation;
