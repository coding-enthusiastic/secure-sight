import React from "react";
import CameraList from "./List/CameraList";
import ListNavbar from "./List/ListNavbar";
import { Data } from "@/interface/types";
import { sampleData } from "./List/SampleData";

const IncidentList = async () => {
  const getData = await fetch(`${process.env.API_URL}/api/incidents`, {
    cache: "no-store",
  });
  const dbData: Data = getData.ok ? await getData.json() : null;

  const parsedData = dbData ? Object.values(dbData) : null;
  const data : Data = parsedData
    ? parsedData.length > 0
      ? dbData
      : sampleData
    : sampleData;

  const dbInput = dbData?.map((e) => e.incidents.length);
  const sampleInput = sampleData?.map((e) => e.incidents.length);
  const total = dbInput ? dbInput[0] : sampleInput[0];

  return (
    <div className="w-[572px]">
      <ListNavbar totalData={total} />

      <CameraList {...data} />
    </div>
  );
};

export default IncidentList;
