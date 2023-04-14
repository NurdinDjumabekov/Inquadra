import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersOutput } from "../store/userSlice";
import User from "../components/user/User";
import PreloaderLoading from "../components/preloader/PreloaderLoading";

const UserPage = () => {
  const dispatch = useDispatch();
  const { users, preloader } = useSelector((state) => state.userSlice);
  useEffect(() => {
    dispatch(usersOutput());
  }, []);
  return (
    <div>
      {preloader && <PreloaderLoading />}
      <div className="parent_for_user">
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
