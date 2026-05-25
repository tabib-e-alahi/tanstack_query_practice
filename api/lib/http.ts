const API_URL = process.env.NEXT_PUBLIC_API_URL;

if(!API_URL){
  throw new Error("API URL is not defined.");
}

export async function http<T>(url: string, fetchOptions: RequestInit): Promise<T>{

  const res = await fetch(`${API_URL}/${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...fetchOptions
  })

  if(!res.ok){
    const error = await res.json().catch(()=>{})
    throw new Error(error.message `Request failed: ${res.status}`);
  }

  return res.json()
}