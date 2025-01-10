The solution is to ensure that `MyComponent` is a child of a `<Route>` element:

```javascript
import { useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function MyComponent() {
  const params = useParams(); 
  return <div>Params: {JSON.stringify(params)}</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<MyComponent />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Now, if you navigate to a URL like `/123`, `params` will correctly contain `{ id: "123" }`.  The key is that `MyComponent` is now nested within a route that matches the URL path structure and allows the `useParams` hook to find its context.