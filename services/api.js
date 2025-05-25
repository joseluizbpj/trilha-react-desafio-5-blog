import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://url.supabase.co/rest/v1',
    headers: {
        apikey: "supakey",
        authorization: "Bearer supakey"
    }
})