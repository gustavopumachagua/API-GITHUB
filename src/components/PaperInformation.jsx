import React from "react";

const PaperInformation = (props) => {
  const { userState } = props;
  const { public_repos, followers, following } = userState;
  return (
    <div className="bg-card px-4  rounded-2xl md:px-20 flex justify-center ">
      <div className="flex flex-col md:flex-row md:space-x-20 lg:space-x-10 xl:space-x-20">
        <div className="flex justify-center py-4">
          <div className="flex flex-col">
            <p className="text-white font-semibold  text-xl">Respos</p>
            <p className="text-white text-lg font-normal text-center py-1">
              {public_repos}
            </p>
          </div>
        </div>
        <div className="flex justify-center py-4">
          <div className="flex flex-col">
            <p className="text-white font-semibold  text-xl">Follower</p>
            <p className="text-white text-lg font-normal text-center py-1">
              {followers}
            </p>
          </div>
        </div>
        <div className="flex justify-center py-4">
          <div className="flex flex-col">
            <p className="text-white font-semibold  text-xl">Following</p>
            <p className="text-white text-lg font-normal text-center py-1">
              {following}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperInformation;
