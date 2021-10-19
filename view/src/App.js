import { useState } from "react";

function App() {

  const [email, setEmail] = useState("")

  return (
    <div className="Container">
      <h1 className='display-4 text-center'>Learning React</h1>

      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input
                onChange={event => console.log(event.target.value)}
                type="email"
                class="form-control"
              />
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
