import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([{}]);

  useEffect(() => {
    //'https://api.github.com/users/faizanansari1/repos'

    async function getRepos() {
      const response = await fetch(
        "https://api.github.com/users/faizanansari1/repos"
      );
      const data = await response.json();
      console.log("New Data", data);
      setRepos(data);
    }
    getRepos();

    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json)
    //     setData(json)
    //   });
  }, []);

  return (
    <div>
      <h2>You are seeing all repositories</h2>
      <ul>
        {repos.map((respObj, ind) => {
          return <li key={ind}>{respObj.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;

// function App() {
//   console.log("heelo");

//   async function getAPI() {
//     const api = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log("API await :", api);

//     const json = await api.json()

//     console.log("JSON:", json)
//   }
// //   getAPI()

// async function postAPI(){
//     const api = await fetch("https://jsonplaceholder.typicode.com/posts",{
//       method: 'post',
//       body: JSON.stringify({
//         title: 'foo',
//         body:'bar',
//         userId:1
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     })

//     console.log("My Api", api);
//     const json = await api.json()
//     console.log("My Json", json)

// }
// postAPI()
