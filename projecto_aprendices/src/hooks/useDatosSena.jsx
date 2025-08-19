import { useState, useEffect, useCallback } from "react";
import axios from 'axios'

const useDatosSena = () => {
    const [ datos, setDatos ]     = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ]     = useState(null)
    const URL = "https://raw.githubusercontent.com/CesarMCuellarCha/apis/refs/heads/main/SENA-CTPI.matriculados.json"

    const fetchDatos = useCallback(async () => {
        setLoading( true )
        setError( null )
        try {
            const response = await axios.get(URL)
            setDatos(response.data) 

        }catch( err ){
            setError("Error al cargar los datos" + err)
        }finally{
            setLoading(false)
        }
    },[])


    useEffect(()=>{
        fetchDatos()
    },[fetchDatos])

    return {datos, loading, error} 
}

export default useDatosSena;
