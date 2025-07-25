import React from "react";
import CameraList from "./List/CameraList";
import ListNavbar from "./List/ListNavbar";

const IncidentList = () => {
  return (
    <div className="w-[572px]">
      <ListNavbar />

      <CameraList />
    </div>
  );
};

export default IncidentList;
