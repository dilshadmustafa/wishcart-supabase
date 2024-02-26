import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import supabase from '../config/supabaseClient'

const LoginScreen = () => (
  <Auth
    supabaseClient={supabase}
    
    appearance={{ theme: ThemeSupa }}
    providers={['github']}
  />
)

export default LoginScreen;
