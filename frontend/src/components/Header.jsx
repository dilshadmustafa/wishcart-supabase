import { Navbar, Nav, Container } from 'react-bootstrap'

import { FaShoppingCart, FaUser, FaPowerOff } from 'react-icons/fa'

import supabase from '../config/supabaseClient'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../slice/authSlice'
import { LinkContainer } from 'react-router-bootstrap'

const  Header = ( { session }) => {

  /*
  const { isLoggedin, user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [session, setSession] = useState(null);
  const sdetails = JSON.parse(localStorage.getItem('sb-gkayqjvsuoowqpbrhhpx-auth-token'));
  console.log("header sdetails email" + sdetails?.user?.email)

  supabase.auth.onAuthStateChange((event, session) => {
    console.log("header event " + event)
    // looks like we need to wait for 30s
    if (event === "SIGNED_IN") {
      console.log("header inside")
      setSession(session);
      console.log("header session " + session)
      if (sdetails !== null && sdetails?.user?.email !== null && user === null) {
        dispatch(authActions.login({ user : sdetails.user.email}));
      }
    }
  });

  console.log("header isLoggedin " + isLoggedin)
  */
 
  return (
    <header>

      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
          <Navbar.Brand href="/">WishCart by Dilshad Mustafa</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
              <Nav.Link href="/cart"><FaShoppingCart /></Nav.Link>
              </LinkContainer>
              { (session === null) && 
                <LinkContainer to="/login">
                <Nav.Link href="/login"><FaUser /></Nav.Link>
                </LinkContainer>
              }
              { (session !== null) && 
                <LinkContainer to="/logout">
                <Nav.Link href="/logout"><FaPowerOff /></Nav.Link>
                </LinkContainer>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  )
}

export default Header