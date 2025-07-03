import { useState, useEffect } from "react";
import proyectosData from "../data/proyectos.json"
import TargetaProyecto from "./TargetaProyecto";

function Proyectos(){
    const [proyectos, setProyectos] = useState([])
    useEffect(() =>{
        setProyectos(proyectosData)
    },[])
    return(
    <>
    <section className="container">
        <h2 className="text-center">Mis proyectos</h2>
        <div className="row">
                {proyectos.map((proyectos,i)=>
                <TargetaProyecto
                key ={i}
                proyecto = {proyectos}/>
                )}
        </div>
    </section>
    {console.log(proyectos)}
    </>
    )
}
export default Proyectos;