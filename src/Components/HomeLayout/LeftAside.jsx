import React, { Suspense } from "react";
import Categories from "../Categories";
import LeftCard from "./LeftCard";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Categories></Categories>
        <LeftCard></LeftCard>
      </Suspense>
    </div>
  );
};

export default LeftAside;
