import { useEffect, useState } from "react";
import "./App.css";
import { UserList } from "./components";

function App() {
  console.log(0 + "abc" || "Hello world");
  console.log("---------------------");
  console.log([].length && 56);
  console.log("---------------------");
  console.log("умова" ? "варіант1" : "варіант2");
  // if ("умова") {
  //   console.log("варіант1");
  // } else {
  //   console.log("варіант2");
  // }

  const [users, setUsers] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: "asdasdasd", secondName: "Martyniuk", isAdmin: true },
        { id: "tydghfftg", name: "Diana", secondName: "Buryak" },
        { id: "ewdrvfwrsvb", name: "Bohdan", secondName: "Fursa" },
        { id: "uiewsfadvvs", name: "Vlad", secondName: "Voloshyn" },
        { id: "asdlkjjlakd", name: "Sergii", secondName: "Vedyankin" },
        { id: "wqutyehascxa", name: "Valeriia", isAdmin: true },
      ]);
    }, 3000);
  }, []);

  return (
    <div>
      {users.length ? (
        <UserList users={users} />
      ) : (
        <div className="lds-dual-ring" />
      )}
    </div>
  );
}

export default App;

// компонента Greeting
// якщо user.isLoggedIn -> відображаємо Hello, {user.name + user.secondName}
// інакше -> Please, log in
// якщо нема user. secondName -> Hello, {user.name + 'Test'}
