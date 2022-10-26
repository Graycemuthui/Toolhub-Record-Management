import Records from "./records/Records";
import MissingRecords from "./records/MissingRecords";
import "../../index.css";

const MainPage = () => {
  return (
    <div className="mainpage">
      <Records />
      <MissingRecords />
    </div>
  );
};

export default MainPage;
