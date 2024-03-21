import React from "react";

const HomePage = () => {
  new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
  return <div>Home Page</div>;
};

export default HomePage;
