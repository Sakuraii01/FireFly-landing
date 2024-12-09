import { Layout, MarginContainer } from "../../components/Layout/Layout";
import CoverSlide from "./component/Cover";
import Mission from "./component/Mission";
import AboutUs from "./component/AboutUs";
import PartnerSection from "./component/Partner";
import Dashboard from "./component/Dashboard";
import Other from "./component/Other";
const Home = () => {
  return (
    <Layout>
      <CoverSlide />
      <Mission />
      <MarginContainer>
        <AboutUs />
      </MarginContainer>
      <PartnerSection />
      <MarginContainer>
        <Dashboard />
      </MarginContainer>
      <MarginContainer>
        <Other />
      </MarginContainer>
    </Layout>
  );
};
export default Home;
