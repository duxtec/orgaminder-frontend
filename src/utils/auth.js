export function isAuth() {
    const token = localStorage.getItem("jwt");
    if (!token) return false;

    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const exp = decodedToken.exp * 1000;

    return Date.now() < exp;
}
