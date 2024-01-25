import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";

function LogoutButton() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { logout }: any = useAuth0();
  return <button onClick={() => logout({
    logoutParams: { returnTo: window.location.origin }
  })}>Log Out</button>
}

const Demo = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { getAccessTokenSilently }: any = useAuth0();

  const { isPending, error, data } = useQuery({
    queryKey: ['placeholderData'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_REACT_APP_AUTH0_API_AUDIENCE
        }
      });
      return fetch(`${import.meta.env.VITE_REACT_APP_API_SERVER_URL}/api/protected`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(res => res.json());
    }
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occured: " + error.message;

  return (
    <>
      <p>{data.message}</p>
      <LogoutButton />
    </>
  )
}

export default Demo;