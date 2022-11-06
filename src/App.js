import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Reset from "./Reset";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <main className="App">
      {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : 
          currentForm === "register" ? <Register onFormSwitch={toggleForm} /> :
          <Reset onFormSwitch={toggleForm} /> 
      }
        
    </main>
  )
}

export default App;
