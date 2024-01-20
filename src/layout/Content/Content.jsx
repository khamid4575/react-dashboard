import ContentMain from "../../components/ContentMain/ContentMain.jsx";
import ContentTop from "../../components/ContentTop/ContentTop.jsx";
import "./Content.css";

const Content = () => {
  return (
    <div className="main-content">
      <ContentTop />
      <ContentMain/>
    </div>
  );
};

export default Content;
