import { ChartBar, HomeIcon, Wallet, Wallet2Icon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-[#000101] p-3 w-[300px] text-white  rounded-xl  ">
      {/* title */}
      <div>
        <h1 className=" font-bold mt-8 mb-8">Dappr</h1>
      </div>
      {/* Navigation Items */}
      <nav className="space-y-2 w-full ">
        {[
          { name: "Home", icon: <HomeIcon /> },
          { name: "Overview", icon: <ChartBar /> },
          { name: "Finance", icon: <Wallet /> },
          { name: "Wallert", icon: <Wallet2Icon /> },
        ].map(({ name, icon }) => (
          <div
            key={name}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-600 "
          >
            <div> {icon} </div>
            <span>{name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
