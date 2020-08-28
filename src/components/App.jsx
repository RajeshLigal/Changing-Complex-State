import React, { useState } from "react";

function App() {
  const [firstName, setfirstName] = useState("");

  const [lastName, setLastName] = useState("");

  function inputChange(event) {
    setfirstName(event.target.value);
  }

  function inputSecond(event) {
    setLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          onChange={inputChange}
          name="fName"
          placeholder="First Name"
          value={firstName}
        />
        <input
          onChange={inputSecond}
          name="lName"
          placeholder="Last Name"
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
