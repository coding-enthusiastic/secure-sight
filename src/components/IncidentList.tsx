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
  const data: Data = parsedData
    ? parsedData.length > 0
      ? dbData
      : sampleData
    : sampleData;

  let count = 0;

  const dbInput = dbData ? dbData : sampleData;
  dbInput.map((e) =>
    e.incidents.map((f) => (f.resolved === false ? count++ : ""))
  );

  return (
    <div className="w-[572px]">
      <ListNavbar total={count} />

      <CameraList {...data} />
    </div>
  );
};

export default IncidentList;
