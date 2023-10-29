// "use client";
// import { useEffect, useState } from "react";
import Link from "next/link";
import getUsers from "../libs/getUsers";

async function UserPage() {
  const users = await getUsers();

  //   const [users, setUsers] = useState([]);
  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const responce = await fetch(
  //           "https://jsonplaceholder.typicode.com/users"
  //         );
  //         const data = await responce.json();
  //         setUsers(data);
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  return (
    <div>
      <h1 className="font-bold">Users</h1>
      <div>
        {users.map((user) => (
          <div key={user.id} className="border my-2 p-4">
            <Link href={`/users/${user.id}`}>
              <div>{user.name}</div>
              {/* <div>{user.email}</div> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPage;
