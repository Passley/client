import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./font/fonts.css"
import EditIcon from '@mui/icons-material/Edit';

const Materials = () => {
    const [materials, setMaterials] = useState([]);
    const [schnellregalCount, setSchnellregalCount] = useState(0);



    useEffect(()=>{
        const fetchAllMaterials = async () => { 
            try {
                const res = await axios.get("http://localhost:8800/materials");
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

        const intervalId = setInterval(() => {
          fetchAllMaterials();
          fetchSchnellregalCount();
        }, 5000); 
    },[])


    const containerStyle = {
        maxHeight: "180px",
        minHeight: "180px",
        display: "flex",
        backgroundColor: "#FFFFFF",
        maxWidth: "1000px",
        minWidth: "",
        marginBottom: "15px",
        boxShadow: "0px 0px 5px rgba(39, 36, 44, 0.2)",
        borderRadius: "5px",
        position: "relative"
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
        paddingRight: "15px",
        color: "#27242C",
        fontSize: "13px",
        margin: "0",
        background: "",
      }

      const OverlayDiv = {
        backgroundColor: "",
        cursor: "pointer", 
        position: "absolute",
        width: "1000px",
        height: "180px",
        zIndex: "998",
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

      const navigateToEditId = (materialId) => {
        navigate(`update/${materialId}`);
      }

    return(
        <div>
          <div style={{display: "flex", alignItems: "center"}}>
            <div style={{background: schnellregalCount < 4 ? "green" : schnellregalCount > 3 && schnellregalCount < 8 ? "orange" : "red", borderRadius: "50%", width: "12px", height: "12px", justifyContent: "center", alignItems: "center", display: "flex", fontSize: "13px", fontWeight: "bold", color: "white"}}></div>
            <div style={{marginLeft: "12px"}}>
              {schnellregalCount > 1 && (
                <p style={schnellRegalMsg}>Es sind {schnellregalCount} Plätze im Schnellregal belegt. <Link to="/schnellregal">Klicke hier</Link> zum leeren.</p>
                )}

                {schnellregalCount === 0 && (
                <p style={schnellRegalMsg}>Es sind {schnellregalCount} Plätze im Schnellregal belegt. <Link to="/schnellregal">Klicke hier</Link> zum leeren.</p>
                )}

                {schnellregalCount === 1 && (
                <p style={schnellRegalMsg}>Es ist {schnellregalCount} Platz im Schnellregal belegt. <Link to="/schnellregal">Klicke hier</Link> zum leeren.</p>
                )}
              </div>
          </div>

            <h1>Alle Materialien</h1>
            <div className="materials">
                {materials
                .slice()
                .reverse()
                .map(material=>(
                    <div className="material" key={material.id} style={containerStyle}>
                      <div onClick= {() => navigateToId(material.id)} style={OverlayDiv}/>
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
                            <li style={listItemStyle2}>{material.Regal}</li>
                        </ul>
                      </div>
                      <div style={{position: "absolute", right: "10px", top: "10px", background: "", zIndex: "999", cursor: "pointer"}} onClick= {() => navigateToEditId(material.id)}><EditIcon fontSize="small" sx={{color: "grey"}}/></div>
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