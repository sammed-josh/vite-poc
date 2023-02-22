import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
