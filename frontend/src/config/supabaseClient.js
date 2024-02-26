import { createClient } from '@supabase/supabase-js'

//console.log("fifth here : "+process.env.NODE_ENV)
//console.log("third here : "+[...process.env])
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY
console.log("fourth here : "+process.env.REACT_APP_SUPABASE_URL)
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase