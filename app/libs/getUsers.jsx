async function getUsers() {
  const responce = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!responce.ok) {
    throw new Error("failed to fetch users");
  }

  return responce.json();
}

export default getUsers;
