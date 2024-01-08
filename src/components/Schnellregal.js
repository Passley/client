import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./font/fonts.css"

const Schnellregal = () => {
    const [schnellregal, setSchnellregal] = useState([]);

    useEffect(()=>{
        const fetchAllSchnellregal = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/schnellregal")
                setSchnellregal(res.data);
            } catch (err) {
                console.log(err)
            }
        };

        fetchAllSchnellregal();
    },[])

    const containerStyle = {
        maxHeight: "180px",
        minHeight: "180px",
        display: "flex",
        backgroundColor: "#FFFFFF",
        width: "1000px",
        marginBottom: "15px",
        boxShadow: "0px 0px 5px rgba(39, 36, 44, 0.2)",
        borderRadius: "5px"
      }
    
      const imageContainerStyle = {
        backgroundColor: "",
        width: "210px",
      }
    
      const imageStyle = {
        height: "100%",
        width: "auto",
        padding: "10px",
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
        maxHeight: "70px",
        overflow: "hidden",
        margin: "",
        color: "#27242C",
        fontSize: "13px",
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

      const navigate = useNavigate()

      const navigateToId = (schnellregaId) => {
        navigate(`/schnellregal/${schnellregaId}`);
      }

    return(
        <div>

            <h1>Schnellregal</h1>
            <div>
                {schnellregal.map(schnellregalItem=>(
                    <div className="schnellregalItem" key={schnellregalItem.id} style={containerStyle}>
                    <div onClick= {() => navigateToId(schnellregalItem.id)} style={OverlayDiv}></div>
                    <div style={imageContainerStyle}>
                        <img src="https://cdn.onemars.net/sites/perfect-fit_de_yPJUN_JAs8/image/dog_m5_exercise_dog_1_1614946074525.png" alt="Bildbeschreibung" style={imageStyle}/>
                    </div>

                    <div style={contentStyle}>
                    <h1 style={headerStyle}>{schnellregalItem.title}</h1>
                    <p style={paragraphStyle}>{schnellregalItem.description}</p>

                    <ul style={listStyle}>
                        <li style={listItemStyle1}>Klassenstufe:</li>
                        <li style={listItemStyle2}>{schnellregalItem.Klassenstufe}</li>
                        <li style={listItemStyle1}>Fach:</li>
                        <li style={listItemStyle2}>{schnellregalItem.Fach}</li>
                        <li style={listItemStyle1}>Kategorie:</li>
                        <li style={listItemStyle2}>{schnellregalItem.Kategorie}</li>
                        <li style={listItemStyle1}>Ablageort:</li>
                        <li style={listItemStyle2}>{schnellregalItem.AktuellePosition}</li>
                    </ul>

                    </div>
                    </div>
                ))}

            </div>
        </div>

        
    )
}

export default Schnellregal