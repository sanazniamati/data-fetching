import getUser from "@/app/libs/getUser";
import getUserPosts from "@/app/libs/getUserPosts";
import { Suspense } from "react";
import UserPosts from "@/app/components/UserPosts";

async function UserPage({ params: { id } }) {
  // initiate both request in parallel
  const userData = getUser(id);
  const userPosts = getUserPosts(id);

  //   wait for both request

  const user = await userData;

  return (
    <div>
      <h1 className=" text-5xl font-bold">userInformation</h1>
      <div className=" m-5 text-xl font-bold ">
        {user.name}
        <span> posts:</span>{" "}
      </div>
      {/* <div>{user.username}</div> */}
      <Suspense fallback={<p className="text-center text-5xl">Loading...</p>}>
        <UserPosts promise={userPosts} />
      </Suspense>
    </div>
  );
}

export default UserPage;
