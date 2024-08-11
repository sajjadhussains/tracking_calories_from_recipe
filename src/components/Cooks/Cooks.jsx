import Cooking from "../Cooking/Cooking";
import CooksCommon from "../CooksCommon/CooksCommon";
import CooksPreparing from "./../CooksPreparing/CooksPreparing";
import PropTypes from "prop-types";

const Cooks = ({ preparings, handleAddCooking, cookings }) => {
  return (
    <div>
      <CooksCommon
        preparings={preparings}
        heading={"Want to Cook"}
      ></CooksCommon>
      <CooksPreparing
        preparings={preparings}
        handleAddCooking={handleAddCooking}
      ></CooksPreparing>
      <CooksCommon
        preparings={cookings}
        heading={"Currently Cooking"}
      ></CooksCommon>
      <Cooking cookings={cookings}></Cooking>
    </div>
  );
};

Cooks.propTypes = {
  preparings: PropTypes.array,
  handleAddCooking: PropTypes.func,
  cookings: PropTypes.array,
};
export default Cooks;
