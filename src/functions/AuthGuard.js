import axios from "axios";
import API_ENDPOINT from './../environments/apiEndPoint'

const AuthGuard = async (next) => {
    axios.post(API_ENDPOINT + 'refresh', 
    {},
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.token,
        }
    })
    .then(res => {
        console.log('Auth Success', res);
        localStorage.token = res.data.access_token; // Refreshing token.
        next()
    }, 
    error => {
        console.error('Auth Error', error);
        localStorage.removeItem('token');
        next({ path: '/login' })
    });
}

export default AuthGuard;