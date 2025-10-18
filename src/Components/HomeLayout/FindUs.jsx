import React from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold">Find on Us</h2>
      <div className="join join-vertical w-full mt-4">
        <button className="btn join-item bg-base-100 justify-start">
          <CiFacebook size={24} color="#1877F2" />
          Facebook
        </button>
        <button className="btn join-item bg-base-100 justify-start">
          <CiTwitter size={24} color="#1DA1F2" />
          Twitter
        </button>
        <button className="btn join-item bg-base-100 justify-start">
          <CiInstagram size={24} color="red" />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
