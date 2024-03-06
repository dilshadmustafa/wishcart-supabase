import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import supabase from '../config/supabaseClient'
import { useNavigate } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

const LoginScreen = () => {

  const navigate = useNavigate();

  /*supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      navigate('/success');
    } else {
      navigate('/');
    }
  });
*/

  return (

    <Row className="justify-content-md-center">
      <Col xs lg="2">
      <Auth style="width=500px; height=500"
      supabaseClient={supabase}
      
      appearance={{ theme: ThemeSupa }}
      providers={['github']}
      />

      </Col>
    </Row>


  );

  };

export default LoginScreen;

