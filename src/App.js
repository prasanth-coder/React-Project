import { useState, useEffect } from "react";
import fire from "./firebase/fire";
import Login from "./firebase/Login"
import Home from "./pages/Home";
import CustomerForm from "./pages/CustomerForm";
import WorkerForm from "./pages/WorkerForm";
import About from "./pages/About";
import MainNavigation from "./layout/MainNavigation"
import { Route,Switch } from "react-router-dom";
import Layout from "./layout/Layout";


import "./App.css"

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong - password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };
  
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  });

  return (
    <div className="App">
      {user ? (
    <div>
        
    <MainNavigation  handleLogout={handleLogout} />        
    <Layout>
    <Switch>
    <Route path="/" exact>
      <Home/>
    </Route>
    <Route path="/customerform">
      <CustomerForm/>
    </Route>
    <Route path="/workerform">
      <WorkerForm/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    </Switch>
    </Layout> 
    
    </div>
        

        
        
      ) : (
        <Login
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
};

export default App;
