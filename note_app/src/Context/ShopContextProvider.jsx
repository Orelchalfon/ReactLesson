import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();
export default function ShopContextProvider(props) {
  const navigateTo = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [passAgain, setPassAgain] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState(1);
  const [Users, setUsers] = useState([
    { uName: "orel", uPass: "oc" },
    { uName: "kobi", uPass: "ko" },
    { uName: "tamar", uPass: "ta" },
  ]);

  // const [isLogged, setIsLogged] = useState(false);
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
      navigateTo(`/`, { state: user });
    }
  };
  const addNote = () => {
    setId((prev) => prev + 1);
    // console.log(id,title,desc);
    const newNotes = [...notes, { id, title, desc }];
    console.log(newNotes);
    setNotes(newNotes);
    // console.log(notes);
  };
  const dellNoteById = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    console.log(newNotes);
    setNotes(newNotes);
  };
  const updateCompDate = (id, title, desc) => {
    let newNotes = [...notes];
    const note = newNotes.find((note) => note.id === id);
    note.title = title;
    note.desc = desc;
    setNotes(newNotes)
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
        setTitle,
        setDesc,
        addNote,
        notes,
        dellNoteById,updateCompDate

        // isLogged,
        // setIsLogged
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}
