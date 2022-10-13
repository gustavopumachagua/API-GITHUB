import React, { Fragment } from "react";

const PrincipalInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row xl:py-10  md:justify-between">
        <p className="text-3xl text-center py-4 text-white font-bold">{name}</p>
        <p className="text-lg text-center py-4 text-white font-bold">
          {created_at}
        </p>
      </div>
      <p className="text-lg text-center md:text-left  py-4 text-white font-bold">{`@${login}`}</p>
    </Fragment>
  );
};

export default PrincipalInformation;
