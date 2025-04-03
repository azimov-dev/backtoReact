import useFetch from "../hooks/useFetch";
const About = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>About This Website</h1>
      <p>This website is built using React and Vite.</p>
      <p>It showcases how routing works in a simple React app.</p>

      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            {console.log(user)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
