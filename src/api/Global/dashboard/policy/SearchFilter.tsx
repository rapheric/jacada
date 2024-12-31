// import React from "react";
// import { Switch, Space, Button } from "antd";
// import { PlusCircleOutlined } from "@ant-design/icons";
// import { FiSearch } from "react-icons/fi";

// interface Props {
//   searchQuery: string;
//   setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
//   showActive: boolean;
//   setShowActive: React.Dispatch<React.SetStateAction<boolean>>;
//   showInactive: boolean;
//   setShowInactive: React.Dispatch<React.SetStateAction<boolean>>;
//   showTenRows: boolean;
//   setShowTenRows: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const SearchFilter: React.FC<Props> = ({
//   searchQuery,
//   setSearchQuery,
//   showActive,
//   setShowActive,
//   showInactive,
//   setShowInactive,
//   showTenRows,
//   setShowTenRows,

// }) => {
 
//   const handleAddPolicy =()=>{
  
//   }

//   return (
//     <div className="flex justify-between items-center space-x-4 bg-gray-900 p-4 rounded-md">
//       <div className="flex justify-between bg-gray-700 items-center w-1/6 focus:outline-none focus:ring-2 focus:ring-gray-500 p-2 rounded-md">
//         <input
//           type="text"
//           placeholder="Search by Name and Description"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full sm:w-2/3 lg:w-2/3 xl:w-3/4 bg-gray-700 text-white  p-2  border-none focus:outline-none focus:ring-2 focus:ring-gray-500"
//         />
//         <FiSearch className="w-6 h-6 text-white ml-3 items-center pr-2" />
//       </div>
//       <div className="flex space-x-4 items-center">
//         <Space>
//           <span className="text-gray-300">All</span>
//           <Switch
//             checked={showActive && !showInactive}
//             onChange={() => {
//               setShowActive(true);
//               setShowInactive(false);
//             }}
//           />
//         </Space>

//         <Space>
//           <span className="text-gray-300">Active</span>
//           <Switch
//             checked={showActive}
//             onChange={() => {
//               setShowActive(true);
//               setShowInactive(false);
//             }}
//           />
//         </Space>

//         <Space>
//           <span className="text-gray-300">Inactive</span>
//           <Switch
//             checked={showInactive}
//             onChange={() => {
//               setShowInactive(true);
//               setShowActive(false);
//             }}
//           />
//         </Space>

//         <Space>
//           <span className="text-gray-300">10 Rows per Page</span>
//           <Switch
//             checked={showTenRows}
//             onChange={() => setShowTenRows(!showTenRows)}
//           />
//         </Space>

//         <Button
//           type="primary"
//           onClick={handleAddPolicy}
//           icon={<PlusCircleOutlined />}
//           size="small"
//           className="bg-blue-600"
//         >
//           Add Policy
//         </Button>
//       </div>

//     </div>
//   );
// };

// export default SearchFilter;
import React from "react";
import { Switch, Space, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { FiSearch } from "react-icons/fi";

interface Props {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  showActive: boolean;
  setShowActive: React.Dispatch<React.SetStateAction<boolean>>;
  showInactive: boolean;
  setShowInactive: React.Dispatch<React.SetStateAction<boolean>>;
  showTenRows: boolean;
  setShowTenRows: React.Dispatch<React.SetStateAction<boolean>>;
  setEditDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>; 
}

const SearchFilter: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  showActive,
  setShowActive,
  showInactive,
  setShowInactive,
  showTenRows,
  setShowTenRows,
  setEditDrawerVisible, 
}) => {

  const handleAddPolicy = () => {
    setEditDrawerVisible(true); 
  };

  return (
    <div className="flex justify-between items-center space-x-4 bg-gray-900 p-4 rounded-md">
      <div className="flex justify-between bg-gray-700 items-center w-1/6 focus:outline-none focus:ring-2 focus:ring-gray-500 p-2 rounded-md">
        <input
          type="text"
          placeholder="Search by Name and Description"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-2/3 lg:w-2/3 xl:w-3/4 bg-gray-700 text-white p-2 border-none focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <FiSearch className="w-6 h-6 text-white ml-3 items-center pr-2" />
      </div>
      <div className="flex space-x-4 items-center">
        <Space>
          <span className="text-gray-300">All</span>
          <Switch
            checked={showActive && !showInactive}
            onChange={() => {
              setShowActive(true);
              setShowInactive(false);
            }}
          />
        </Space>

        <Space>
          <span className="text-gray-300">Active</span>
          <Switch
            checked={showActive}
            onChange={() => {
              setShowActive(true);
              setShowInactive(false);
            }}
          />
        </Space>

        <Space>
          <span className="text-gray-300">Inactive</span>
          <Switch
            checked={showInactive}
            onChange={() => {
              setShowInactive(true);
              setShowActive(false);
            }}
          />
        </Space>

        <Space>
          <span className="text-gray-300">10 Rows per Page</span>
          <Switch
            checked={showTenRows}
            onChange={() => setShowTenRows(!showTenRows)}
          />
        </Space>

        <Button
          type="primary"
          onClick={handleAddPolicy}
          icon={<PlusCircleOutlined />}
          size="small"
          className="bg-blue-600"
        >
          Add Policy
        </Button>
      </div>
    </div>
  );
};

export default SearchFilter;
