
function App() {

  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
</nav>
      <form class="row g-3">
        <div class="col-md-12">
          <label for="validationServer01" class="form-label">First name</label>
          <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required></input>


        </div>
        <br></br>

        <div class="col-md-12">
          <label for="validationServer01" class="form-label">Last name</label>
          <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required></input>
          

        </div>

        <div class="col-md-12">
          <label for="validationServer01" class="form-label">Username</label>
          <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required></input>
          

        </div>

        <div class="container">
  <div class="row">
    <div class="col text-center">
      <button class="btn btn-primary btn-lg btn-block">Submit</button>
    </div>
  </div>
</div>
     
        
      </form>
    
    </div>
    
  );
}

export default App;
