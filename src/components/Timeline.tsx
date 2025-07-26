"use client";

import React, { useEffect, useState } from "react";

const Timeline = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/incidents")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="flex items-center justify-center h-[298px]">
      Timeline
    </div>
  );
};

export default Timeline;
