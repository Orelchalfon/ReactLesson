import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();
export default function ShopContextProvider(props) {
  const navigateTo = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [passAgain, setPassAgain] = useState("");
  const [Users, setUsers] = useState([
    { uName: "orel", uPass: "oc" },
    { uName: "kobi", uPass: "ko" },
    { uName: "tamar", uPass: "ta" },
  ]);
  
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState();

  const regValidation = () => {
    if (pass !== passAgain) alert("Passwords DO NOT MATCH⛔");
    else {
      const newUsers = [...Users, { uName: name, uPass: pass }];
      setUsers(newUsers);
      navigateTo("/login");
    }

    // (name.length===0 && alert("⛔Empty Filed Try again⛔")) ||
    //   (pass.length && alert("⛔Empty Filed Try again⛔")) ||
    //   (pass !== passAgain && alert(`UnMatched Pass`)) ||
    //   (name.length &&
    //     pass.length &&
    //     pass === passAgain &&
    //     navigateTo("/login"));
  };
  const loginValidation = () => {
    const user = Users.find(
      (user) => user.uName === name && user.uPass === pass
    );
    console.log(user);
    if (!user) {
      console.log(Users);
      alert(`⛔InValid Inputs`);
    } else {
      // setLoggedUser(user.uName);
      navigateTo(`/`,{state:user});
    }
  };
  return (
    <ShopContext.Provider
      value={{
        name,
        setName,
        pass,
        setPass,
        passAgain,
        setPassAgain,
        regValidation,
        Users,
        loggedUser,
        setLoggedUser,
        loginValidation,
        isLogged,
        setIsLogged
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}
