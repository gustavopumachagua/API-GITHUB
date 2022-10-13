import React from "react";
import PrincipalInformation from "../components/PrincipalInformation";
import Description from "./Description";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;
  return (
    <div className="lg:grid lg:grid-cols-2 ">
      <div className="flex justify-center lg:px-10 lg:py-10 px-5 py-5 xl:py-20 xl:px-20">
        <LazyLoadImage
          className="rounded-full border-2 border-theme w-full h-full lg:w-80 lg:h-80 xl:w-96 xl:h-96"
          alt="GitHub User"
          src={avatar_url}
          width="100%"
          min-height="144"
          effect="blur"
        />
      </div>
      <div>
        <div>
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
