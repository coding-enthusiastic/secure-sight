import React from "react";
import CameraList from "./List/CameraList";
import ListNavbar from "./List/ListNavbar";
import { Data } from "@/interface/types";

const IncidentList = async () => {
  const getData = await fetch(`${process.env.API_URL}/api/incidents`, {
    cache: "no-store",
  });
  const dbData: Data = getData.ok ? await getData.json() : null;

  // const input = dbData.map((e) => e.incidents.length);

  return (
    <div className="w-[572px]">
      <ListNavbar />

      <CameraList {...dbData} />
    </div>
  );
};

export default IncidentList;
