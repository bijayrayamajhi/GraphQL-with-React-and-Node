import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query getTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(query);
  console.log(data);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error: {error.message} </p>;
  return data.getTodos.map(({ id, title, completed, user }) => (
    <div key={id}>
      <h3>{title}</h3>
      <h4>{completed}</h4>
      <br />
      <b>About the user:</b>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <br />
    </div>
  ));
}
export default App;
