import "./Project.css";
import { useSelector } from "react-redux";
import Setting from "../Components/Setting/Setting";
import Timer from "../Components/Timer/Timer";
import Next from "../Components/Next/Next";
import Text from "../Components/Text/Text";
import Header from "../Components/Header/Header";
import Content from "../Components/Content/Content";

const Project = () => {
  const statusTheme = useSelector((state) => state.theme);
  return (
    <div className={`${statusTheme} background`}>
      {/* <Header /> */}
      <Content />
      <Timer />
      <Setting />
      <Next />
      <div className="text">
        <Text />
      </div>
    </div>
  );
};

export default Project;
