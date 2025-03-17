const Child = ({message}) => {
  return (
    <>
      <div>
        <h2>Child Component</h2>
        <p>I get this message:</p>
        <h3 className="message">{message}</h3>
      </div>

      <div className="exercise">
        <h2>
          Exercise
        </h2>
        <p>
          Create a new component called <b>Grandchild</b>.
        </p>
        <p>
          Child component collects a message from the user through an input field called <b>second message</b>.
        </p>
        <p>
          The <b>Grandchild</b> component should display a <b>final message</b> build from both messages concatenated.
        </p>
      </div>
    </>
  );
}

export default Child;