import getUser from "@/app/libs/getUser";

async function UserPage({ params: { id } }) {
  const userData = getUser(id);
  const user = await userData;

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

export default UserPage;
