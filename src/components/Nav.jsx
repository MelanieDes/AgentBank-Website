import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/img/argentBankLogo.png";
import { logout } from '../redux/reducers/authSlice';


function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);  
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    // Dispatchez l'action de déconnexion ici
    dispatch(logout());
    // Redirigez l'utilisateur vers la page de connexion (à adapter en fonction de votre application)
    // par exemple, navigate('/login') si vous utilisez react-router-dom
    window.location.href = '/';
  };
      
    return (
        <nav className="main-nav">
          <a className="main-nav-logo" href={"./"}>
            <img
              className="main-nav-logo-image"
              src={logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div>
          {token ? (
            <div className="main-nav-auth">
              <div className="main-nav-auth-profil">{user.userName}</div>
              <div>
                <i className="fa-solid fa-user"></i>
                <i className="fa-solid fa-gear"></i>
              </div>             
              <button className="main-nav-item" onClick={handleLogout}>Logout</button>
            </div>
            
          ) : (
            <a className="main-nav-item" href={"./sign"} >
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          )}
          </div>
      </nav>
    );
  };
  
  export default Nav;