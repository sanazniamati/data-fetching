async function getUserPosts(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  if (!response.ok) {
    throw new Error("faild to fetch data");
  }
  const data = response.json();
  return data;
}

export default getUserPosts;
