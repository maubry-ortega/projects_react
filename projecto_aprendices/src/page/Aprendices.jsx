import useDatosSena    from "../hooks/useDatosSena"
import DataTable    from "react-data-table-component"
import { useState } from "react"

const Aprendices = () => {
    const { datos, loading, error }  = useDatosSena()
    const [ filtro, setFiltro ]      = useState("")

    const columnas = [
        {
            name:"Nombres",
            selector:row => row.NOMBRE,
            sortable: true,
        },{
            name:"Apellidos",
            selector:row => row.PRIMER_APELLIDO,
            sortable: true,
        },{
            name:"Estado",
            selector:row => row.ESTADO_APRENDIZ,
            sortable: true,
        },{
            name:"Ficha",
            selector:row => row.FICHA,
            sortable: true,
        }
    ]

    const customStyles = {
        table:{
            style:{
                border: "1px solid #ccc",
            },
        },
        headRow:{
            style:{
                borderBottom: "1px solid #ccc",
                backgroundColor: "#008000",
                color: "#FFFFFF"
            },
        },
        rows:{
            style:{
                borderBottom:"1px solid #eee",
            },
        }
    }

    //filtrado por texto
    const datosFiltrados = datos.filter(aprendiz => 
        aprendiz.NOMBRE.toLowerCase().includes(filtro.toLowerCase()) ||
        aprendiz.PRIMER_APELLIDO.toLowerCase().includes(filtro.toLowerCase()) ||
        aprendiz.ESTADO_APRENDIZ.toLowerCase().includes(filtro.toLowerCase()) ||
        aprendiz.FICHA.toString().toLowerCase().includes(filtro.toLowerCase()) 
    )

    if (loading) return <p>Cargando datos...</p>;
    if (error) return <p>error: {error}</p>;

    return (
        <>
            <h1 className="text-center fw-bold">LISTADO DE APRENDICES</h1>
            <div className="mt-2 w-75" style={
                {
                    margin:"auto"
                }
                }>
                <label htmlFor="txtFiltro" className="fw-bold">filtro busqueda de aprendices</label>
                <input type="text" className="form-control mt-2" 
                    placeholder="Filtrar por cualquier columna..."
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
                    customStyles={ customStyles }
                />
            </div>
        </>
    )
}

export default Aprendices;