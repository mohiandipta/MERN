import { useState } from "react";

// fetch
const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    // let endPointURL = 'http://localhost:8080/api'

    fetch(`http://localhost:8080/api/users`, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err))
  }

  return (
    <div className='Container'>
      {/* using json stringify */}
      {/* <pre>{JSON.stringify(users, null, 4)}</pre> */}

      {/* using map to display every element from json */}
      {users.map((users) =>
        <div className='alert alert-primary' key={users.age}>
          {users.name} age is {users.Age} years oldoi
        </div>
      )}

      {/* button */}
      <button onClick={fetchUserData} className='btn btn-primary'>
        Fetch User Data
      </button>
    </div>
  )
}

export default App;

// import { useState } from "react";

// function App() {

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("");

//   // function for submit and get data from events
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('STATE => ', email, password)
//   }

//   return (
//     <div className="Container">
//       <h1 className='display-4 text-center'>Learning React</h1>

//       <div className='row'>
//         <div className='col-md-6 offset-md-3'>
//           <form onSubmit={handleSubmit}>
//             <div class="mb-3">
//               <label for="exampleInputEmail1" class="form-label">Email address</label>
//               <input
//                 value={email} //dataBind with useState
//                 onChange={event => setEmail(event.target.value)} // onChange event
//                 type="email"
//                 class="form-control"
//               />
//               <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//             </div>
//             <div class="mb-3">
//               <label for="exampleInputPassword1" class="form-label">Password</label>
//               <input
//                 value={password}
//                 onChange={event => setPassword(event.target.value)}
//                 type="password" class="form-control" />
//             </div>
//             <button type="submit" class="btn btn-primary">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
