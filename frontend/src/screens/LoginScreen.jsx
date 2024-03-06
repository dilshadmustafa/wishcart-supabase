import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import supabase from '../config/supabaseClient'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {

  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      navigate('/success');
    } else {
      navigate('/');
    }
  });


  return (
    <Auth
      supabaseClient={supabase}
      
      appearance={{ theme: ThemeSupa }}
      providers={['github']}
    />
  );

  };

export default LoginScreen;

