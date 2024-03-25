import { useState } from 'react';
import './App.css';

function App() {
  const initialState = {
    username: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialState);

  const handleSave = (e) => {
    e.preventDefault();
    ;
    setFormData({
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    });
    console.log('form submitted: ', formData)
  };

  const handleTextInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearForm = () => {
    setFormData(initialState)
  }
  return (
    <div className="App">
      <form onSubmit={handleSave}>
        <label htmlFor="username">User name:</label>
        <input
          name="username"
          value={formData.username || ''}
          onChange={handleTextInput}></input>

        <label htmlFor="email">Email:</label>
        <input
          name="email"
          value={formData.email ||''}
          onChange={handleTextInput}></input>

        <label htmlFor="password">Password:</label>
        <input
          name="password"
          value={formData.password || ''}
          onChange={handleTextInput}></input>

        <button type="submit">Go</button>
        <button onClick={handleClearForm}>Clear</button>
      </form>
    </div>
  );
}

export default App;
