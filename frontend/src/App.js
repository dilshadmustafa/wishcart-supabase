import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './slice/authSlice'


const App = () => {

  const { isLoggedin, user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  console.log("App isLoggedin " + isLoggedin)
  console.log("App user " + user)
  const sdetails = JSON.parse(localStorage.getItem('sb-gkayqjvsuoowqpbrhhpx-auth-token'));
  console.log("App sdetails email" + sdetails?.user?.email)

  if (sdetails !== null && sdetails?.user?.email !== null && user === null) {

    dispatch(authActions.login({ user : sdetails.user.email}));

  }



  return (
    <>
    <Header/>
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