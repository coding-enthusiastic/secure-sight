"use client";

import React, { useEffect, useState } from "react";

const Timeline = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/incidents")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="flex items-center justify-center h-[298px]">
      Timeline
      <p>{JSON.stringify(data, null, 3)}</p>
    </div>
  );
};

export default Timeline;
