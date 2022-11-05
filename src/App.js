import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <main className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
        
    </main>
  )
}

export default App;
