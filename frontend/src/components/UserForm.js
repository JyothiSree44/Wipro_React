import React, { useState } from "react";

function UserForm({ addUser }) {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addUser(name);
    setName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
