import React, { Suspense } from "react";
import Categories from "../Categories";
import LeftCard from "./LeftCard";
import LoadingPage from "../LoadingPage";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        <Categories></Categories>
        <LeftCard></LeftCard>
      </Suspense>
    </div>
  );
};

export default LeftAside;
