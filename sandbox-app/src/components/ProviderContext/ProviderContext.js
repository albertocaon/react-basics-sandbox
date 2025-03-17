import React from 'react';
import { MyProvider } from './MyContext';
import SomeComponent from './SomeComponent';
const ProviderContext = () => {
  return (
    <>
      <MyProvider>
        <div>
          <h1>Provider & Context</h1>
          <SomeComponent />
        </div>
      </MyProvider>

      <div className="exercise">
        <h2>Exercise</h2>
        <p>Create a new component called <b>AnotherComponent</b> with an input field collecting text from user.</p>
        <p>
          Display the text typed by the user in the <b>AnotherComponent</b> into the <b>SomeComponent</b> using the <b>Context</b>.
        </p>
      </div>
    </>
  )
}

export default ProviderContext;