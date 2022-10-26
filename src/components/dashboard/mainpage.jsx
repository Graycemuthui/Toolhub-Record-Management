import Records from "./records/Records";
import MissingRecords from "./records/MissingRecords";
import EditedRecords from "./records/EditedRecords";
import Pie from "./records/Pie";
import "../../index.css";

const MainPage = () => {
  return (
    <div className="mainpage">
      <Records />
      <MissingRecords />
      <EditedRecords />
      <Pie />
    </div>
  );
};

export default MainPage;
