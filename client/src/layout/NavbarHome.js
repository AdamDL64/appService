import { Link,} from "react-router-dom";
// import { getUser,logout } from "../services/authorize";




const NavbarHome = () => {
  

  
  
 
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
         <Link to={'/'}>
          <img
            src="https://cdn.icon-icons.com/icons2/1465/PNG/512/146manmechanic2_100581.png"
            alt="logo"
            width={85}
          />
         </Link>
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
            style={{}}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p ">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  <h1>Home</h1>
                </Link>
              </li>
              
              {/* redux เช็ค */}
            <li className="nav-item">
                <Link to={"/login/"} className="nav-link active">
                  <h1>Login</h1>
                </Link>
              </li>
             
           

            <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h1>Register</h1>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to={"/register/"} className="dropdown-item">
                      <h4>RegisterUser</h4>
                    </Link>
                  </li>
                  {/* <li><a className="dropdown-item" href="#">Another action</a></li> */}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link to={"/registerAdmin/"} className="dropdown-item">
                      <h4>Register Admin</h4>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarHome;
