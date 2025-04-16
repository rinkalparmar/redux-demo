import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { MdAccountCircle } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';



function NavbarMain() {

    let navigate = useNavigate();
    let isAuthenticate = JSON.parse(localStorage.getItem("isAuthenticate"));

    const logout = () => {
        localStorage.removeItem("isAuthenticate");//this is rmove true when user clicked logout button
        navigate("/login");
    };



    const userInfo = JSON.parse(localStorage.getItem("userData"));
    const logindata = JSON.parse(localStorage.getItem("logindata"));

    const currentUser = userInfo.find((data) => { return data.email === logindata.email; });
    // console.log("currentUser", currentUser);

    return (
        <Navbar expand="lg" className="fixed-top" style={{ backgroundColor: "rgb(51, 51, 51)", minWidth: "164px", maxWidth: "100%" }}>
            <Container>
                <Navbar.Brand href="/home" className="text-white">Demo Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' >

                    {
                        isAuthenticate ?
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant='light' className='bg-light border-0'>
                                    <MdAccountCircle style={{ height: "35px", width: "40px" }} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='p-3 bg-light text-bold'>
                                    <button className='btn btn-danger btn-sm'> <Dropdown.Item onClick={logout}>LogOut</Dropdown.Item></button>
                                    <Dropdown.Item >hello {currentUser.name}</Dropdown.Item>
                                    <Dropdown.Item >Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> : <>
                                <Button variant="primary mx-4" onClick={() => navigate("/login")}>Login</Button>
                                <Button variant="primary" onClick={() => navigate("/signup")}>SignUp</Button>
                            </>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMain;