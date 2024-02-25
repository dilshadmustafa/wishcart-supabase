//import { createClient } from '@supabase/supabase-js'

const createClient = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient.createClient(supabaseUrl, supabaseKey);

supabase.from('test1').select("*").then((data) => {
    console.log(data)
});



