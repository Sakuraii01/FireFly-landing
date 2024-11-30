import { Layout, MarginContainer } from "../../components/Layout/Layout";
import Header from "../../components/Layout/Header";
import OnDeveloping from "../../components/OnDevelop";

const News = () => {
  return (
    <Layout>
      <MarginContainer>
        <Header header="NEWS" />
        <OnDeveloping />
      </MarginContainer>
    </Layout>
  );
};
export default News;
