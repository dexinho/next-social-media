"use client";

import React, { useEffect } from "react";

const HomePage = async () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/todos");
      const data = await response.json();

      console.log(data);
    };

    fetchData();
  });

  return <div>Hi</div>;
};

export default HomePage;
