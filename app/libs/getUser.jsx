async function getUser(id) {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!responce.ok) {
    throw new Error("faild to featch user");
  }
  const data = await responce.json();
  return data;
}

export default getUser;
