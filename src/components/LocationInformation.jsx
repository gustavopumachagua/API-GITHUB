import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineBusiness, MdLanguage } from "react-icons/md";

const LocationInformation = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;
  return (
    <div className="bg-card grid grid-cols-1 gap-4 py-3 rounded-2xl md:grid-cols-2 md:px-20 lg:px-10">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex justify-center py-1">
            <IoLocationSharp className="text-white font-semibold text-2xl" />
          </div>
          <p className="text-white text-lg font-normal">{location}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex justify-center py-1">
            <IoLogoTwitter className="text-white font-semibold text-2xl" />
          </div>
          {twitter_username !== null ? (
            <p className="text-white text-base font-normal">
              {twitter_username}
            </p>
          ) : (
            <p className="text-white text-base font-normal">Not Available</p>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex justify-center py-1">
            <MdLanguage className="text-white font-semibold text-2xl" />
          </div>
          {blog !== null ? (
            <a target="_blank" href={blog}>
              <p className="text-white text-base font-normal ">{blog}</p>
            </a>
          ) : (
            <p className="text-white text-base font-base">Not Available</p>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex justify-center py-1">
            <MdOutlineBusiness className="text-white font-semibold text-2xl" />
          </div>
          {company !== null ? (
            <p className="text-white text-base font-normal">{company}</p>
          ) : (
            <p className="text-white text-base font-normal">Not Available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationInformation;
