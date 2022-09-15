import { Navbar,Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNav = () =>{
    const location = useLocation();
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Space-Flight
          </Navbar.Brand>
          <Link style={{color: "white"}} className={location.pathname === "/" ? "nav-link active" : "nav-link" } to="/">Home</Link> 
        </Container>
      </Navbar>
    )
}

export default MyNav;