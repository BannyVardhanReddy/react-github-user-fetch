import { useEffect, useState } from "react"

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        async function fetchData() {
            if (!url) {
                return;
            }
            setLoading(true);
            setData(null);
            setError(null);
            try {
                const response = await fetch(url,{signal : controller.signal});
                if (!response.ok) {
                    throw new Error('Failed to fecth the data');
                }
                const data = await response.json();
                console.log(data);
                setData(data);
                setLoading(false);
            } catch (error) {
                if(error.name !== 'AbortError')
                    setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => controller.abort();
    }, [url])

    return {data,loading,error};
}

export default useFetch;