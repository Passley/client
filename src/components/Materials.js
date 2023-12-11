import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./font/fonts.css"

const Materials = () => {
    const [materials, setMaterials] = useState([]);
    const [schnellregalCount, setSchnellregalCount] = useState(0);



    useEffect(()=>{
        const fetchAllMaterials = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/materials")
                setMaterials(res.data);
            } catch (err) {
                console.log(err)
            }
        };

        const fetchSchnellregalCount = async () => {
          try {
            const res = await axios.get("http://localhost:8800/countSchnellregal");
            setSchnellregalCount(res.data.schnellregalCount);
          } catch (err) {
            console.log(err);
          }
        };

        fetchAllMaterials();
        fetchSchnellregalCount();
    },[])

    const containerStyle = {
        maxHeight: "180px",
        minHeight: "180px",
        display: "flex",
        backgroundColor: "#FFFFFF",
        maxWidth: "1000px",
        marginBottom: "15px",
        boxShadow: "0px 0px 5px rgba(39, 36, 44, 0.2)",
        borderRadius: "5px"
      }
    
      const imageContainerStyle = {
        backgroundColor: "",
        width: "210px"
      }
    
      const imageStyle = {
        height: "100%",
        width: "auto",
        padding: "10px"
      }
    
      const contentStyle = {
        backgroundColor: "",
        maxWidth: "775px",
        position: "relative"
      }
    
      const listStyle = {
        listStyleType: "none",
        padding: "0",
        display: "flex",
        position: "absolute",
        bottom: "-5px",
      }
    
      const headerStyle = {
        marginTop: "15px",
        maxHeight: "45px",
        overflow: "hidden",
        color: "#27242C",
        fontSize: "25px",
        marginTop: "13px",
        marginBottom: "5px"
        //fontFamily: "Avenir Next LT Pro Bold"
      }
    
      const listItemStyle1 = {
        marginRight: "5px",
        color: "#27242C",
        fontSize: "13px",
        fontWeight: "bold",
      }

      const listItemStyle2 = {
        marginRight: "20px",
        color: "#27242C",
        fontSize: "13px",
        whiteSpace: "nowrap",
        //fontFamily: "Avenir Next LT Pro"
      }
    
      const paragraphStyle ={
        maxHeight: "78px",
        overflow: "hidden",
        margin: "",
        color: "#27242C",
        fontSize: "13px",
        margin: "0"
        //fontFamily: "Avenir Next LT Pro"
      }

      const OverlayDiv = {
        backgroundColor: "",
        cursor: "pointer", 
        position: "absolute",
        width: "1000px",
        height: "180px",
        zIndex: "999",
      }

      const Schnellregal = {
        backgroundColor: "pink",
        maxWidth: "1000px"
      }

      const schnellRegalMsg = {
       margin: "" 
      }

      const navigate = useNavigate()

      const navigateToId = (materialId) => {
        navigate(`materials/${materialId}`);
      }

    return(
        <div>
            {schnellregalCount > 1 && (
            <p style={schnellRegalMsg}>Es sind {schnellregalCount} Plätze im Schnellregal belegt. <Link to="/schnellregal">Klicke hier</Link> zum leeren.</p>
            )}

            {schnellregalCount === 0 && (
            <p style={schnellRegalMsg}>Es sind {schnellregalCount} Plätze im Schnellregal belegt. <Link to="/schnellregal">Klicke hier</Link> zum leeren.</p>
            )}

            {schnellregalCount === 1 && (
            <p style={schnellRegalMsg}>Es ist {schnellregalCount} Platz im Schnellregal belegt. <Link to="/schnellregal">Klicke hier</Link> zum leeren.</p>
            )}

            <h1>Alle Materialien</h1>
            <div className="materials">
                {materials.map(material=>(
                    <div className="material" key={material.id} style={containerStyle}>
                    <div onClick= {() => navigateToId(material.id)} style={OverlayDiv}></div>
                    <div style={imageContainerStyle}>
                        <img src="https://cdn.onemars.net/sites/perfect-fit_de_yPJUN_JAs8/image/dog_m5_exercise_dog_1_1614946074525.png" alt="Bildbeschreibung" style={imageStyle}/>
                    </div>

                    <div style={contentStyle}>
                    <h1 style={headerStyle}>{material.title}</h1>
                    <p style={paragraphStyle}>{material.description}</p>

                    <ul style={listStyle}>
                        <li style={listItemStyle1}>Klassenstufe:</li>
                        <li style={listItemStyle2}>{material.Klassenstufe}</li>
                        <li style={listItemStyle1}>Fach:</li>
                        <li style={listItemStyle2}>{material.Fach}</li>
                        <li style={listItemStyle1}>Kategorie:</li>
                        <li style={listItemStyle2}>{material.Kategorie}</li>
                        <li style={listItemStyle1}>Ablageort:</li>
                        <li style={listItemStyle2}>{material.AktuellePosition}</li>
                    </ul>

                    </div>
                    </div>
                ))}

            </div>
        </div>

        
    )
    /*<div className="material" key={material.id}>
                        {material.image && <img src={material.image} alt="" />}
                        <h2>{material.title}</h2>
                        <p>{material.description}</p>
                    </div>*/

}

export default Materials