import {jwtDecode} from "jwt-decode";

function isTokenExpired(token) {
  if (!token) return true;
  const { exp } = jwtDecode(token);
  if (!exp) return true;
  const now = Date.now() / 1000; // in seconds
  return exp < now;
}

export default isTokenExpired;
