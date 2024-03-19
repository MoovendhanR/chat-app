import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online ">
          <div className="w-12 rounded-full">
            <img
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1710746846~exp=1710747446~hmac=f07cf02447a7bd5a3c91b77114f2f76d967c85ac872844f935268ebf71a7ba2d"
              alt="user avatr"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1"> 
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">Moovendhan R</p>
            <span className="text-xl">🙋</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"/>
          </>
  );
};

export default Conversation;


//
// import React from "react";

// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online ">
//           <div className="w-12 rounded-full">
//             <img
//               src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1710746846~exp=1710747446~hmac=f07cf02447a7bd5a3c91b77114f2f76d967c85ac872844f935268ebf71a7ba2d"
//               alt="user avatr"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col flex-1"> 
//           <div className="flex gap-3 justify-between">
//             <p className="font-bold text-gray-200">Moovendhan R</p>
//             <span className="text-xl">🙋</span>
//           </div>
//         </div>
//       </div>

//       <div className="divider my-0 py-0 h-1"/>
//           </>
//   );
// };

// export default Conversation;
