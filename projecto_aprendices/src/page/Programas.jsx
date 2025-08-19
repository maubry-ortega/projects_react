import useDatosSena from "../hooks/useDatosSena";
import DataTable, { Alignment } from "react-data-table-component"
import { useState } from "react"

const Programas = () => {
    const { datos, loading, error } = useDatosSena()
    const [ filtro, setFiltro ]     = useState("")

    const columnas=[
        {
            name:"CODIGO_PROGRAMA",
            selector:row => row.CODIGO_PROGRAMA,
            sortable: true,
        },{
            name:"PROGRAMA",
            selector:row => row.PROGRAMA,
            sortable: true,
        },{
            name:"NIVEL_FORMACION",
            selector:row => row.NIVEL_DE_FORMACION,
            sortable: true,
        },
    ]
    const customStyles={
        table:{
            style:{
                border: "1px solid #ccc",
                margin: "auto"
            },
        },
        headRow: {
           style:{
                borderBottom: "1px solid #ccc",
                backgroundColor: "#008000",
                color: "#ffffff"
            }, 
        },
        rows:{
            style:{
                borderBottom:"1px solid #eee"
            },
        },
    }

    //filtrado por texto
    const datosFiltrados = datos.filter(aprendiz => 
        aprendiz.CODIGO_PROGRAMA.toString().toLowerCase().includes(filtro.toLowerCase()) ||
        aprendiz.PROGRAMA.toLowerCase().includes(filtro.toLowerCase()) ||
        aprendiz.NIVEL_DE_FORMACION.toLowerCase().includes(filtro.toLowerCase()) 
       
    )
    if (loading) return <p>Cargando datos...</p>
    if (error) return <p>error: {error}</p>

     return (
        <>
            <h1 className="text-center fw-bold">LISTADO DE PROGRAMAS</h1>
            <div className="mt-2 w-75" style={{margin:"auto"}}>
                <label htmlFor="txtFiltro" className="fw-bold">filtro busqueda de programas</label>
                <input type="text" className="form-control mt-2" 
                    placeholder="Filtrar por cualquier columna"
                    onChange={(e)=>setFiltro(e.target.value)}
                    id="txtFiltro" 
                />
                <DataTable
                    className = "mt-3"
                    columns   = { columnas }
                    data      = { datosFiltrados }
                    pagination
                    highlightOnHover
                    responsive
                    customStyles = { customStyles }
                />
            </div>
        </>
    )
}

export default Programas;