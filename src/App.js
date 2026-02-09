import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page refresh
    setFullName(firstName + " " + lastName);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>XDisplayName</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {fullName && <h3>Full Name: {fullName}</h3>}
    </div>
  );
}

export default App;
