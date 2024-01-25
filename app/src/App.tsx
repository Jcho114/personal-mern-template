import { useQuery } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

function LoginButton() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { loginWithRedirect }: any = useAuth0();
  
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
}

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ['placeholderData'],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occured: " + error.message;

  return (
    <>
      <h1>Data</h1>
      {data.map((el: { name: string; username: string; email: string }) => 
        <div key={el.name}>
          {el.name}
        </div>
      )}
      <LoginButton />
    </>
  )
}

export default App;