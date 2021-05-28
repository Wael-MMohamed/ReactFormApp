import './bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='row'>
          <div className='col-sm-4'></div>
          <div className='col-sm-4'>
            <h3>GoMyCode Form</h3>
            <form>
              <div class="form-group">
                <label for="email">User Name:</label>
                <input type="text" class="form-control" id="email"/>
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd"/>
              </div>
              <div className='form-group'>
                <div className='row'>
                  <div className='col-sm-4'>
                    <button className="btn btn-primary">Sign In</button>
                  </div>
                  <div className='col-sm-4'></div>
                  <div className='col-sm-4'>
                    <button className="btn btn-primary">Sign Up</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='col-sm-4'></div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
