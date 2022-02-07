import axios from "axios";

export async function getUser(){
    const res = await axios.get('https://randomuser.me/api')
    return res
}