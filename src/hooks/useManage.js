import axios from "axios"
const FIREBASEURL = "https://o-yingoh-40388-default-rtdb.firebaseio.com"
const REGISTOR = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key"
const APIKEY = "AIzaSyAyce3GK3jaz9Xf37jH2txlfYOxhDAloTQ"

async function useManageGetOne(arrayName){
    const TOKEN = localStorage.getItem("token")
    const LOCALID = localStorage.getItem("localId")

    try{
        const res = await axios.get(`${FIREBASEURL}/${arrayName}/${LOCALID}.json?auth=${TOKEN}`)
        return res.data
    }catch(err){
        console.log(err.message)
    }
}
async function useManageGetTwo(arrayName){
    try{
        const res = await axios.get(`${FIREBASEURL}/${arrayName}.json`)
        return res.data
    }catch(err){
        console.log(err.message)
    }
}
async function useManagePostOne(arrayName, data){
    try{
        const res = await axios.post(`${FIREBASEURL}/${arrayName}.json`,data)
        return res.data
    }catch(err){
        console.log(err.message)
    }
}
async function useManagePostTwo(data){
    try{
        const res = await axios.post(`${REGISTOR}=${APIKEY}`,data)
        return res.data
    }catch(err){
        console.log(err.message)
    }
}
async function useManagePatch(arrayName, firebaseKey, data){
    try{
        const res = await axios.patch(`${FIREBASEURL}/${arrayName}/${firebaseKey}.json`, data)
        return res.data
    }catch(err){
        console.log(err.message)
    }
}
async function useManagePut(arrayName, data){
    try{
        const res = await axios.put(`${FIREBASEURL}/${arrayName}.json`,data)
        return res.data
    }catch(err){
        console.log(err.message)
    }
}
async function useManageDelete(arrayName, firebaseKey){
    try{
        const res = await axios.delete(`${FIREBASEURL}/${arrayName}/${firebaseKey}.json`)
        return res.data
    }catch(err){
        console.log(err.message)
    }
}

export {
    useManageGetOne,
    useManageGetTwo,
    useManagePostOne,
    useManagePostTwo, 
    useManagePatch,
    useManagePut,
    useManageDelete
}