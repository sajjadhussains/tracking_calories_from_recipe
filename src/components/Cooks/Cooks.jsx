import Cooking from "../Cooking/Cooking";
import CooksCommon from "../CooksCommon/CooksCommon";
import CooksPreparing from "./../CooksPreparing/CooksPreparing";

const Cooks = ({ preparings }) => {
  return (
    <div>
      <CooksCommon
        preparings={preparings}
        heading={"Want to Cook"}
      ></CooksCommon>
      <CooksPreparing preparings={preparings}></CooksPreparing>
      <CooksCommon
        preparings={preparings}
        heading={"Currently Cooking"}
      ></CooksCommon>
      <Cooking preparings={preparings}></Cooking>
    </div>
  );
};

export default Cooks;
