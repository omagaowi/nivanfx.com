import { root, apiKeys } from "./authStore.js"


const fetchUserData = async (token) => {
    try{
        const headers = {
            'x_api_key': apiKeys.api,
            'Authorization': `Bearer ${token}`,
        }
        const response = await fetch(`${root}/auth/user/data`, {
            headers: headers,
            method: 'GET'
        })
        const data = await response.json() 
        return data
    }catch(err){
        throw err;
    }   
}

export default fetchUserData