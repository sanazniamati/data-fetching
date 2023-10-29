async function UserPosts({ promise }) {
  const posts = await promise;

  return (
    <div>
      <ul className="border-2 m-2 p-5">
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPosts;
