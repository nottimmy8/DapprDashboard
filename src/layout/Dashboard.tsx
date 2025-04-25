import MainContent from "../components/MainContent";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen flex p-3 bg-[#deecf3]">
      <Sidebar />
      <div className="flex-grow ">
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
