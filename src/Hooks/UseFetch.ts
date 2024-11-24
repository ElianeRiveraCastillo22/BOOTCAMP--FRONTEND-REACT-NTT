import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error | null

interface Params<T> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType
}

export const useFetch = <T>(apiCall: () => Promise<Data<T>>): Params<T> => {

    const [data, setData] = useState<Data<T>>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ErrorType>(null)

    useEffect(() => {
        let controller = new AbortController()
        setLoading(true)
        const fetchData = async () => {
            try{
                const data = await apiCall()
                setData(data)
                setError(null)
            }catch (err){
                setError(err as Error)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
        return () =>{
            controller.abort()
        }
    }, [])

    return {data, loading, error}
}