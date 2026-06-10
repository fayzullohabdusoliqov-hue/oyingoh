import axios from "axios"

export async function useAuthorization(email, password, setLoading, setLogin){
  try{
    setLoading(true)

    const res = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAyce3GK3jaz9Xf37jH2txlfYOxhDAloTQ",{
        email: email,
        password: password,
        returnSecureToken: true
    })

    localStorage.setItem("token", res.data.idToken)
    localStorage.setItem("localId", res.data.localId)
    setLogin(true)

    return res.data
  }catch(err){
    console.log(err.message)
  }finally{
    setLoading(false)
  }
}