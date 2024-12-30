
// import React from "react";
// import { LuArrowDownWideNarrow } from "react-icons/lu";

// interface TableHeaderProps {
//   headers: string[];
// }

// const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
//   return (
//     <thead>
//       <tr className="bg-gray-700 text-white text-sm">
//         {headers.map((header, index) => (
//           <th
//             key={index}
//             className="py-2 px-4  text-left gap-1"
//           >
//             <span>{header}</span>
//             <LuArrowDownWideNarrow size={16} className="text-gray-400 font-bold" />
//           </th>
//         ))}
//       </tr>
//     </thead>
//   );
// };

// export default TableHeader;
import React from "react";
import { LuArrowDownWideNarrow } from "react-icons/lu";

interface TableHeaderProps {
  headers: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => {
  return (
    <thead>
      <tr className="bg-gray-700 text-white text-sm dark:bg-gray-900 dark:text-gray-300">
        {headers.map((header, index) => (
          <th
            key={index}
            className="py-2 px-4 sm:px-6 text-left gap-1 font-medium"
          >
            <span>{header}</span>
            <LuArrowDownWideNarrow size={16} className="text-gray-400 font-bold" />
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
