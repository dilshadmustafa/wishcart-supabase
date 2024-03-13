import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './slice/authSlice'
import { useState } from 'react'
import supabase from './config/supabaseClient'

const App = () => {

  const { isLoggedin, user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [session, setSession] = useState(null);
  const sdetails = JSON.parse(localStorage.getItem('sb-gkayqjvsuoowqpbrhhpx-auth-token'));
  console.log("App sdetails email" + sdetails?.user?.email)

  supabase.auth.onAuthStateChange((event, session) => {
    console.log("App event " + event)
    // looks like we need to wait for 30s
    if (event === "SIGNED_IN") {
      console.log("App inside")
      setSession(session);
      console.log("App session " + session)
      if (sdetails !== null && sdetails?.user?.email !== null && user === null) {
        dispatch(authActions.login({ user : sdetails.user.email}));
      }
    }
  });

  console.log("App isLoggedin " + isLoggedin)




  return (
    <>
    <Header session = { session } />
      <main className='py-3'>
        <Container>
          <Outlet/>
        </Container>
      </main>
    <Footer/>
    </>
  )
}

export default App