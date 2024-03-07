import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import supabase from '../config/supabaseClient'
import { Row, Col } from 'react-bootstrap'

const LoginScreen = () => {
 
  return (
    
    <Row className="justify-content-md-center">
      <Col xs lg="2">
      <Auth style={{ width : "500", height : "500"}}
      supabaseClient={supabase}
      
      appearance={{ theme: ThemeSupa }}
      providers={['github']}
      />

      </Col>
    </Row>
    

  );

  };

export default LoginScreen;

