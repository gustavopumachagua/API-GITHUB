import React, { Fragment } from "react";
import PaperInformation from "../components/PaperInformation";
import LocationInformation from "../components/LocationInformation";
const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <Fragment>
      <div className="py-2">
        {bio !== null ? (
          <p className="text-center md:text-left text-lg text-white py-1">
            {bio}
          </p>
        ) : (
          <p className="text-center text-lg md:text-left text-white py-1">
            Lorem ipsum dolor sit amet. Ea excepturi doloribus ea praesentium
            nihil nam dolore laboriosam ad fugit nobis
          </p>
        )}
      </div>
      <div className="flex flex-col space-y-4 py-2">
        <PaperInformation userState={userState} />
        <LocationInformation userState={userState} />
      </div>
    </Fragment>
  );
};

export default Description;
