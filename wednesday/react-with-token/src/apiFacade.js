
const URL = "http://localhost:8080/securitystarter";

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

function facade() {
    //Insert utility-methods from a latter step (d) here
    const setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }
    const getToken = () => {
        return localStorage.getItem('jwtToken')
    }
    const loggedIn = () => {
        const loggedIn = this.getToken() != null;
        return loggedIn;
    }
    const logout = () => {
        localStorage.removeItem("jwtToken");
    }

    const login = (user, pass) => {
        const options = this.makeOptions("POST", true, { username: user, password: pass });
        return fetch(URL + "/api/login", options)
            .then(handleHttpErrors)
            .then(res => { setToken(res.token) })
            .catch(err => { throw err });
    }

    const fetchData = () => {
        const data = () => {
            const options = this.makeOptions("GET", true); //True add's the token
            return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
        }
        return data;
    }


    const makeOptions = (method, addToken, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && this.loggedIn()) {
            opts.headers["x-access-token"] = this.getToken();
        }
        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    return (
        makeOptions, fetchData, login, logout, getToken, setToken
    )
}
export default facade;