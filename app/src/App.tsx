import { useQuery } from '@tanstack/react-query';
import './App.css';

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ['placeholderData'],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occured: ' + error.message;

  console.log(data);

  return (
    <>
      <h1>Data</h1>
      {data.map((el: { title: string; body: string }) => 
        <div>
          {el.title}
        </div>
      )}
    </>
  )
}

export default App
