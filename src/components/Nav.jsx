import Home from "../Pages/Home";
import Sign from "../Pages/Sign";
import logo from "../assets/img/argentBankLogo.png";

function Nav() {
      
    return (
        <nav class="main-nav">
        <a class="main-nav-logo" href={<Home />}>
          <img
            class="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a class="main-nav-item" href={<Sign />}>
            <i class="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
    );
  };
  
  export default Nav;