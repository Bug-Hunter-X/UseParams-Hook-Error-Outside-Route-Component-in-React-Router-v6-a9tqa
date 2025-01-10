In React Router Dom v6, attempting to access the `useParams()` hook outside of a component that is rendered within a `<Route>` element will result in an error.  This is because `useParams()` relies on the routing context provided by the route definition.  The following code would throw an error:

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const params = useParams(); // Error: Cannot read properties of undefined (reading 'pathname')
  return <div>Params: {JSON.stringify(params)}</div>;
}

export default MyComponent;
```