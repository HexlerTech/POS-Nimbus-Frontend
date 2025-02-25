import React, { useState, useEffect } from "react";
import ViewKitchenStaffs from "./viewKitchen";
import managerService from "../../../Services/managerService";

const KitchenManagement = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    managerService.addKitchenStaff(username, password).then((res) => {
      console.log(res);
      if (res === "error") {
        alert("Error adding cashier");
      } else {
        alert("Kitchen Staff Added Successfully");
        setUsername("");
        setPassword("");
        console.log(res);
      }
    });
  };

  return (
    <div className="text-center flex justify-center min-h-screen lg:flex-row flex-col">
      <div className="m-10 p-5 sm:p-10 lg:w-1/2">
        <h1 className="text-2xl text-blue-500 mb-3">Add Kitchen Staff</h1>
        <p class="text-gray-500 dark:text-gray-400 mb-10">
          Add a new kitchen staff to the system
        </p>
        <div className="flex flex-col justify-center gap-10">
          <div className="flex flex-col w-full">
            <h1 className="text-left text-black text-md">Username</h1>
            <input
              type="text"
              placeholder="Name"
              value={username}
              className="p-2 border border-gray-300 rounded-xl"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-left text-black text-md">Password</h1>
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="p-2 border border-gray-300 rounded-xl"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded-xl"
            onClick={handleSubmit}
          >
            Add Kitchen Staff
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <ViewKitchenStaffs className="w-full" />
      </div>
    </div>
  );
};

export default KitchenManagement;
