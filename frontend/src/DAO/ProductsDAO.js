import supabase from '../config/supabaseClient'

const getProducts = async () => {
    /*return supabase.from('test1').select("*").then((data) => {
        console.log(data)
    });
*/
/*
supabase.from('Products').select("*").then((data) => {
    console.log("getProducts data " + data)
});
*/
const dbresult = await supabase.from('Products').select("*");
console.log("getProducts dbresult " + dbresult)
    return dbresult
    



}

export { getProducts }











