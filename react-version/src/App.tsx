import React, { useEffect, useState } from 'react';
import axios from 'axios';

// https://randomuser.me/api
type UserName = {
  first: string;
  last: string;
  title: string;
};

type UserPicture = {
  thumbnail: string;
  medium: string;
  large: string;
};

type UserInfo = {
  name: UserName;
  picture: UserPicture;
};

export default function App() {
  const [nextUser, setNextUser] = useState<number>(1);
  const [userInfos, setUserInfos] = useState<UserInfo[]>([]);

  const getUserData = async () => {
    axios(`https://randomuser.me/api/?page=${nextUser}`).then((res) => {
      setUserInfos([...userInfos, ...res.data.results]);
    });
    setNextUser(nextUser + 1);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          getUserData();
        }}
      >
        Load Next
      </button>
      {userInfos.map((userInfo: UserInfo, idx: number) => (
        <div>
          <p>
            {userInfo.name.first} {userInfo.name.last}
          </p>
          <img src={userInfo.picture.thumbnail} alt="" />
        </div>
      ))}
    </div>
  );
}
