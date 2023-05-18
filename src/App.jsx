import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState({});
  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-showvike-showvike.vercel.app/connect"
    )
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  return <h1>{message.message}</h1>;
}

export default App;
