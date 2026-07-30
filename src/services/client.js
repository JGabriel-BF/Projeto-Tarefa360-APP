import { Axios } from "axios"


export const HTTPClient = axios.create({
    baseURL: "https://localhost:5007",
    headers:{
                "Acess-Control-Allow-Origin": "*",
                "Acess-Control-Allow-Headers": "Authorization",
                "Acess-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATH, DELETE",
                "Content-Type": "application/json;charset-UTF-8",
    }
            
})