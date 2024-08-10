import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {

    const fetchData = async () => {
        try{
            const response = await axios.get(url)
            setData(response.data.data)
            setLoading(false)
        }
        catch(err)
        {   
            setError(err.message)
        }
    }

    fetchData()

    },[url])

    return {data, loading, error}
}

export default useFetch