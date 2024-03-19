import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1710746846~exp=1710747446~hmac=f07cf02447a7bd5a3c91b77114f2f76d967c85ac872844f935268ebf71a7ba2d"
            alt="tailwind css chat bublble component"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">
        {" "}
        Hi! What is upp?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
};

export default Message;
