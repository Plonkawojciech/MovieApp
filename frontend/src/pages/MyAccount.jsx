import React, { useState } from "react";

function MyAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('logowanie', { username, password })

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setErrors(data.errors || ["Wystąpił nieznany błąd."]);
      } else {
        setErrors([]);
        const result = await response.text(); // lub response.json()
        console.log("Sukces:", result);
        alert("Logowanie udane!");
      }
    } catch (err) {
      console.error("Błąd sieci:", err);
      setErrors(["Nie udało się połączyć z serwerem."]);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      {errors.length > 0 && (
        <ul className="errors">
          {errors.map((err, i) => <li key={i}>{err}</li>)}
        </ul>
      )}
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Username</label>
        <input
          type="username"
          name="username"
          id="username"
          value={username}
          onChange={(e) => { setUsername(e.target.value) }}
          required
        />
        <label htmlFor="Password">Password</label>
        <input
          type="text"
          name="Password"
          id="Password"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
          required
        />
        <button>submit</button>
      </form>
    </div>
  )
}

export default MyAccount