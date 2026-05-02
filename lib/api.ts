import { ApiResponse } from "@/types/api";

const API_URL = "https://1jbod7rtr5.execute-api.eu-central-1.amazonaws.com/prod/exercise";
const API_KEY = "8865cb695d00c83c542790757b5e6ad08d47c3909cc652cc";

export async function fetchProducts(): Promise<ApiResponse> {
    const res = await fetch(API_URL, {
        headers: { 'x-api-key': API_KEY },
    })

    if(!res.ok) throw new Error('Failed to fetch data');
    
    const data = await res.json();
    return data;
}