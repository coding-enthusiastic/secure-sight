import IncidentPlayer from "./IncidentPlayer";
import IncidentList from "./IncidentList";

const Main = () => {
  return (
    <div className="flex flex-row justify-center p-[24px] gap-[24px]">
      <div className="flex h-[450px] gap-6 overflow-hidden">
        <IncidentPlayer />
        <IncidentList />
      </div>
    </div>
  );
};

export default Main;
