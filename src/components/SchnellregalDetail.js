import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Regale from './Regale';

const SchnellregalDetail = () => {
    const { id } = useParams();
    const [schnellregal, setSchnellregal] = useState({});
    const [schnellregalItem, setSchnellregalItem] = useState({});
    const [regal, setRegal] = useState('');
      
    useEffect(() => {
        const fetchSchnellregal = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/schnellregal/${id}`);
                setSchnellregal(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        const fetchSchnellregalItem = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/schnellregalItem/${id}`);
                setSchnellregalItem(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchSchnellregal();
        fetchSchnellregalItem();
    }, [id]);

    const containerDiv = {
        background: "",
        maxWidth: "1000px",
        display: "flex"
    }
    
    const leftSide = {
        background: "",
        width: "40%",
    }

    const rightSide = {
        background: "",
        width: "60%",
    }

    const imageStyle = {
        width: "100%",
        height: "auto"
    }

    const titleStyle = {
        margin: "0",
        padding: "0",
        marginLeft: "30px",
        marginBottom: "20px",
    }

    const descriptionStyle = {
        margin: "0",
        padding: "0",
        marginLeft: "30px",
        marginBottom: "30px",
        fontSize: "14px",
    }

    const listStyle = {
        listStyleType: "none",
        padding: "0",
        margin: "0",
        marginLeft: "30px",
        marginBottom: "50px",
        fontSize: "14px",
    }

    const listItemStyle = {
        marginBottom: "5px"
    }

    const handleRegalChange = (event) => {
        setRegal(event.target.value);
      };

    const navigate = useNavigate()

    const handleBackClick = (event) => {
        navigate("/schnellregal")
    };

    return (

        <div>

            <div style={{marginBottom: "12px"}}>
               <Button variant="text" startIcon={<NavigateBeforeIcon />} style={{color: "black", }} onClick={handleBackClick}>Zurück</Button>
            </div>

            <div style={containerDiv}>

                <div style={leftSide}>
                    <img src="https://cdn.onemars.net/sites/perfect-fit_de_yPJUN_JAs8/image/dog_m5_exercise_dog_1_1614946074525.png" alt="Bildbeschreibung" style={imageStyle}/>
                    <h1 style={{margin: "0", fontSize: "16px", marginBottom: "10px", marginTop: "10px"}}>Kommentar</h1>
                    <p style={{margin: "0", fontSize: "14px"}}>{schnellregal.Kommentar}</p>
                </div>

                <div style={rightSide}>
                    <h1 style={titleStyle}>{schnellregal.title}</h1>
                    <p style={descriptionStyle}>{schnellregal.description}</p>

                    <ul style={listStyle}>
                        <li style={listItemStyle}>Klassenstufe: {schnellregal.Klassenstufe}</li>
                        <li style={listItemStyle}>Kategorie: {schnellregal.Kategorie}</li>
                        <li style={listItemStyle}>Ablageort: {schnellregal.AktuellePosition}</li>
                        <li style={listItemStyle}>Fach: {schnellregal.Fach}</li>
                    </ul>

                    <div>
                        <Stack spacing={"15px"} direction="row" style={{marginLeft: "30px", marginBottom: "25px", alignItems: "center"}}>
                            <TextField id="outlined-number1" select label="Regal" SelectProps={{native: true}} InputLabelProps={{shrink: true,}} size="medium" style={{width: "90px"}} onChange={handleRegalChange}>
                                <Regale/>
                            </TextField>
                            <TextField id="outlined-number" label="Anzahl" type="number" InputLabelProps={{shrink: true,}} size="medium" inputProps={{min: 0}} style={{width: "90px"}} disabled={true} value={schnellregal.Ausgeliehen}/>
                            <p style={{fontSize: "17px"}}>Sammle 10 Punkte</p>
                        </Stack>
                    </div>

                    <div style={{background: "", width: "350px", marginLeft: "30px"}}>
                            <Button variant="contained" style={{width: "100%", marginBottom: "8px"}} disabled={regal === '' || regal === "Schnellregal"}>Zurückbringen</Button>
                            
                            {schnellregal.link !== null && ( 
                                <a href={schnellregal.link} target="_blank" rel="noopener noreferrer">
                                    <Button variant="contained" style={{width: "100%"}}>Nachkaufen</Button>
                                </a>    
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default SchnellregalDetail;
