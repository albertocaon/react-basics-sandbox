import {useState} from "react";
import Child from "./Child";

const ParentToChild = () => {
  const [message, setMessage] = useState('Hello from Parent Component');

  return (
    <div>
      <h1>Parent Component</h1>
      <label>Message to send: </label>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <Child message={message} />
    </div>
  );
}

export default ParentToChild;