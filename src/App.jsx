import React, { useEffect, useState } from "react";
import Searcher from "./components/Searcher";

import { getGitHubUser } from "./services/users";
import UserCard from "./containers/UserCard";
import Footer from "./components/Footer";

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");
  const [notFound, setNotFound] = useState(false);

  const gettinUser = async (user) => {
    const userResponse = await getGitHubUser(user);

    if (userState === "octocat") {
      localStorage.setItem("octocat", userResponse);
    }

    if (userResponse.message === "Not Found") {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  };

  console.log(userState);

  useEffect(() => {
    gettinUser(inputUser);
  }, [inputUser]);

  return (
    <>
      <div className="px-8 py-8 bg-body flex flex-col md:px-20 md:py-10 xl:px-28">
        <Searcher inputUser={inputUser} setInputUser={setInputUser} />
        <UserCard userState={userState} />
      </div>
      <Footer />
    </>
  );
};

export default App;
