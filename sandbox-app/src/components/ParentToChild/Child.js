const Child = ({message}) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>I get this message:</p>
      <h3 className="message">{message}</h3>
    </div>
  );
}

export default Child;