import { useEffect, useState } from "react"

const Paises = () => {
    const [ paises, setPaises     ] = useState([])
    const [ filtro, setFiltro     ] = useState('')
    const [ cargando, setCargando ] = useState(true)

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,maps')
        .then(res => res.json())
        .then(data => {
            const ordenados = data.sort((a, b) => 
                a.name.common.localeCompare(b.name.common)
            );
            setPaises(ordenados)
            setCargando(false)
        })
        .catch(error => {
            console.error('error al obtener paises: ', error)
            setCargando(false)
        })
    }, [])

    const paisesFiltrados = paises.filter( pais => 
        pais.name.common.toLowerCase().includes(filtro.toLowerCase())
    )

    return (
        <>
            <input 
                type        ="text" 
                placeholder = "Busca el pais por nombre... " 
                value       = {
                    filtro
                } 
                onChange    = {
                    (e) => setFiltro(
                        e.target.value
                    )
                } 
                style       = {
                    {
                        padding  : '8 px', 
                        width    : '100%',
                        maxWidth : 400
                    }} 
            />
            {cargando ? (
                <p>Cargando paises...</p>
            ) : (
                <ul 
                style={{
                    listStyle : 'none',
                    padding   : 0,
                    marginTop : 20
                }}>
                    {paisesFiltrados.map((pais) => (
                        <details>
                            <summary>
                                <li
                                    key={pais.name.common}
                                    style={{
                                        display       : 'flex',
                                        alignItems    : 'center',
                                        marginBottom  : '10px',
                                        borderBottom  : '1px solid #ccc',
                                        paddingBottom : '10px'
                                    }}
                                >
                                    <img 
                                        src={pais.flags.svg} 
                                        alt={`Bandera de ${pais.name.common}`} 
                                        width={40}
                                        style={{
                                            marginRight : '10px'
                                        }}
                                    />
                                    <span>{pais.name.common}</span>
                                </li>
                            </summary>
                            <li>
                                Capital: {pais.capital}
                            </li>
                            <li>
                                Poblacion: {pais.population}
                            </li>
                            <a href={pais.maps.googleMaps}> 
                                <li>
                                    Mapa en google
                                </li>
                            </a>
                        </details>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Paises;