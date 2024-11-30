import { Layout, MarginContainer } from "../../components/Layout/Layout";
import Header from "../../components/Layout/Header";
import OnDeveloping from "../../components/OnDevelop";
const Dashboard = () => {
  return (
    <Layout>
      <MarginContainer>
        <Header topic="DASHBOARD" />
        <OnDeveloping />
      </MarginContainer>
    </Layout>
  );
};
export default Dashboard;
