import React from "react";

const Headers = ({ data }) => {
  const handleLogOut = () => {
    localStorage.removeItem("loggedUser");
  }
  
  return (
    <>
      <div className="pb-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold ">
            Hey,
            <br />
            <span className="text-4xl"> {data.firstName}👋</span>
          </h2>
          <form action="/" onClick={handleLogOut}>
            <button className="bg-red-600 px-3 py-2 rounded-sm font-bold ">
              Log out
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Headers;
