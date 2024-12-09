import { Layout, MarginContainer } from "../../components/Layout/Layout";
import OnDeveloping from "../../components/OnDevelop";
import Header from "../../components/Layout/Header";
// import { Language, Place, NearMe } from "@mui/icons-material";
// import { useState } from "react";

const Dashboard = () => {
  // const [selectedNode, setSelectedNode] = useState(null);
  // const NodeListData = [
  //   {
  //     id: 1,
  //     name: "Node 1",
  //     location: {
  //       latitude: 0,
  //       longitude: 0,
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: "Node 2",
  //     location: {
  //       latitude: 0,
  //       longitude: 0,
  //     },
  //   },
  //   {
  //     id: 3,
  //     name: "Node 3",
  //     location: {
  //       latitude: 0,
  //       longitude: 0,
  //     },
  //   },
  //   {
  //     id: 4,
  //     name: "Node 4",
  //     location: {
  //       latitude: 0,
  //       longitude: 0,
  //     },
  //   },
  //   {
  //     id: 5,
  //     name: "Node 5",
  //     location: {
  //       latitude: 0,
  //       longitude: 0,
  //     },
  //   },
  // ];
  return (
    <Layout>
      <MarginContainer>
        <Header topic="DASHBOARD" />
        <OnDeveloping />
        {/*
        <div className="md:h-96 lg:h-[500px] w-full bg-color3 rounded-3xl"></div>
        <div className="flex gap-10 bg-white shadow-sm p-6 mt-5 rounded-3xl">
          <div className="w-full">
            <h4>Node Lists</h4>
            <div className="grid grid-cols-2 gap-4">
              {NodeListData.map((item, index) => (
                <div key={index} className="bg-bgmain p-4 rounded-lg">
                  <div className="flex gap-1 bg-white p-3 border-2 border-color10 rounded-xl">
                    <Place
                      className="text-red-400 drop-shadow-md"
                      fontSize="large"
                    />
                    <h5 className="my-auto">{item.name}</h5>
                  </div>
                  <div className="my-4 ms-2">
                    <div className="flex">
                      <Language className="text-red-500 mr-2" />
                      <p> {item.location.latitude}</p>
                    </div>
                    <div className="flex">
                      <Language className="text-red-500 mr-2" />
                      <p>{item.location.longitude}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-white px-4 py-2 rounded-xl">
                      <NearMe className="text-color7" />
                    </button>
                    <button className="bg-color10 hover:bg-navtext py-2 w-full rounded-xl duration-200">
                      <p className="text-center text-white">View Details</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <MiniDashboard />
          </div>
        </div> */}
      </MarginContainer>
    </Layout>
  );
};
export default Dashboard;

// const MiniDashboard = () => {
//   return (
//     <div>
//       <div>graph</div>
//       <div>
//         <p>humadity : 10</p>
//       </div>
//     </div>
//   );
// };
