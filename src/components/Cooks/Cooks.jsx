import Cooking from "../Cooking/Cooking";
import CooksCommon from "../CooksCommon/CooksCommon";
import CooksPreparing from "./../CooksPreparing/CooksPreparing";

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

export default Cooks;
