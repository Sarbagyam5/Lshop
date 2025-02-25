
'use client'
function getAuthUser() {
  return localStorage.getItem("authToken")
}
export default getAuthUser

export  function getUserFromToken(){
  const token = getAuthUser();
  const arrayToken = token.split(".");
  const tokenPayload = JSON.parse(atob(arrayToken[1]))
  return tokenPayload
}
