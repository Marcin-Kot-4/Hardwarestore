export default function authToken() {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return {token: user.accessToken};
    } else {
        return {};
    }
}
