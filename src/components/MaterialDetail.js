import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Regale from './Regale';

const MaterialDetail = () => {
    const { id } = useParams();
    const [material, setMaterial] = useState({});
    const [teacher, setTeacher] = useState([]);
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [selectedTeacher1, setSelectedTeacher1] = useState("");
    const [regal, setRegal] = useState('');
    const [anzahl, setAnzahl] = useState(0);

    useEffect(() => {
        const fetchMaterial = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/materials/${id}`);
                setMaterial(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        const fetchTeacher = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/teachers/${id}`);
                setTeacher(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchMaterial();
        fetchTeacher();
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
    
      const handleAnzahlChange = (event) => {
        setAnzahl(parseInt(event.target.value, 10) || 0);
      };

      const handleTeacherChange = (event) => {
        setSelectedTeacher(event.target.value);
        setRegal('');
      };

      const handleTeacherChange1 = (event) => {
        setSelectedTeacher1(event.target.value);
      };

      function myfunction() {
        if(anzahl !== 0 && regal !== '') {
            return false;
        } else if(anzahl !== 0 && selectedTeacher !== '') {
            return false;
        } else return true
      };

      const navigate = useNavigate()

      const handleBackClick = (event) => {
        navigate("/")
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
                    <p style={{margin: "0", fontSize: "14px"}}>{material.Kommentar}</p>
                </div>

                <div style={rightSide}>
                    <h1 style={titleStyle}>{material.title}</h1>
                    <p style={descriptionStyle}>{material.description}</p>

                    <ul style={listStyle}>
                        <li style={listItemStyle}>Klassenstufe: {material.Klassenstufe}</li>
                        <li style={listItemStyle}>Kategorie: {material.Kategorie}</li>
                        <li style={listItemStyle}>Ablageort: {material.AktuellePosition}</li>
                        <li style={listItemStyle}>Fach: {material.Fach}</li>
                    </ul>

                    <div>
                        <Stack spacing={"15px"} direction="row" style={{marginLeft: "30px", marginBottom: "25px", alignItems: "center"}}>
                            {material.Anzahl - material.Ausgeliehen > 0 && (
                            <TextField id="outlined-number" select label="Regal" SelectProps={{native: true}} InputLabelProps={{shrink: true,}} size="medium" style={{width: "90px"}} disabled={selectedTeacher !== ""} value={regal} onChange={handleRegalChange}>
                                <Regale/>
                            </TextField>
                            )}
                            <TextField id="outlined-number" label="Anzahl" type="number" InputLabelProps={{shrink: true,}} size="medium" inputProps={{min: 0}} style={{width: "90px"}} value={anzahl} onChange={handleAnzahlChange}/>
                            <p style={{fontSize: "17px"}}>{material.Anzahl - material.Ausgeliehen} Verfügbar von {material.Anzahl}</p>
                        </Stack>
                    </div>

                    {material.Anzahl - material.Ausgeliehen > 0 && (
                    <div style={{background: "", width: "350px", marginLeft: "30px"}}>
                        <Stack spacing={"8px"} direction="row" style={{marginBottom: "8px"}}>
                            <Button variant="contained" style={{width: "35%"}} disabled={myfunction()}>Ausleihen</Button>
                            <TextField id="outlined-select-1" select label="Ausleihen von" SelectProps={{native: true}} size={'small'} style={{width: "65%"}} value={selectedTeacher}  onChange={handleTeacherChange}>

                                <option></option>
                                {teacher.map(teacherItem => (
                                    <option key={teacherItem.id}>{`${teacherItem.Vorname} ${teacherItem.Nachname}`}</option>
                                ))}
                           

                            </TextField>
                        </Stack>
                        <Button variant="contained" style={{width: "100%", marginBottom: "8px"}} disabled={regal === '' || anzahl === 0}>zurückgeben</Button>
                        {material.link !== "" && ( 
                            <a href={material.link} target="_blank" rel="noopener noreferrer">
                                <Button variant="contained" style={{width: "100%"}}>Nachkaufen</Button>
                            </a>    
                        )}
                    </div>
                    )}

                    {material.Anzahl - material.Ausgeliehen === 0 && (
                    <div style={{background: "", width: "350px", marginLeft: "30px"}}>
                        <Stack spacing={"8px"} direction="column" style={{marginBottom: "8px"}}>
                            <TextField id="outlined-select" select label="Ausleihen von" SelectProps={{native: true}} size={'small'} value={selectedTeacher1} style={{width: "100%"}} onChange={handleTeacherChange1}>
                                <option></option>
                                {teacher.map(teacherItem => (
                                    <option key={teacherItem.id}>{`${teacherItem.Vorname} ${teacherItem.Nachname}`}</option>
                                ))}
                            </TextField>
                            <Button variant="contained" style={{width: "100%", marginBottom: "0px"}} disabled={!(anzahl !== 0 && selectedTeacher1 !== '')}>Von Lehrer ausleihen</Button>
                            {material.link !== "" && ( 
                                <a href={material.link} target="_blank" rel="noopener noreferrer">
                                    <Button variant="contained" style={{width: "100%"}}>Nachkaufen</Button>
                                </a>    
                            )}
                        </Stack>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MaterialDetail;
