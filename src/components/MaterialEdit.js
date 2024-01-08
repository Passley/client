import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Regale from './Regale';
import Kategorie from './Kategorie';
import Fach from './Fach';
import { useNavigate, Link } from "react-router-dom"

const MaterialEdit = () => {
    const { id } = useParams();
    const [teacher, setTeacher] = useState([]);
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [selectedTeacher1, setSelectedTeacher1] = useState("");
    const [regal, setRegal] = useState('');
    const [anzahl, setAnzahl] = useState(0);
    const [material, setMaterial] = useState({
        image: "",
        title: "",
        description: "",
        ISBN: "",
        Kommentar: "",
        Anzahl: "",
        Ausgeliehen: "0",
        Kategorie: "",
        Fach: "",
        Klassenstufe: "",
        Regal: "",
        AktuellePosition: "",
        link: ""
    });

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
        width: "350px"
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

      const navigate = useNavigate()

      const handleDelete = async () => {
        try {
            console.log("http://localhost:8800/materials/${id}");
            await axios.delete(`http://localhost:8800/materials/${id}`);
            navigate("/")
        } catch (err) {
            console.error(err);
        }
    };

    const handleBackClick = (event) => {
      navigate("/")
    };

    const handleEdit = async () => {
        try {
           
            await axios.put(`http://localhost:8800/materials/${id}`, {
            image: material.image,
            title: material.title,
            description: material.description,
            ISBN: material.ISBN,
            Kommentar: material.Kommentar,
            Anzahl: material.Anzahl,
            Ausgeliehen: material.Ausgeliehen,
            Kategorie: material.Kategorie,
            Fach: material.Fach,
            Klassenstufe: material.Klassenstufe,
            Regal: material.Regal,
            AktuellePosition: material.AktuellePosition,
            link: material.link
        });

            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (

        <div>

            <div style={{marginBottom: "12px"}}>
               <Button variant="text" startIcon={<NavigateBeforeIcon />} style={{color: "black", }} onClick={handleBackClick}>Zurück</Button>
            </div>

            <div style={containerDiv}>

                <div style={leftSide}>
                    <img src="https://cdn.onemars.net/sites/perfect-fit_de_yPJUN_JAs8/image/dog_m5_exercise_dog_1_1614946074525.png" alt="Bildbeschreibung" style={imageStyle}/>

                    <TextField
                        multiline
                        id="outlined-required"
                        label="Kommentar"
                        style={{margin: "0", fontSize: "16px", marginBottom: "10px", marginTop: "10px", width: "100%"}}
                        name="Kommentar"
                        value={material.Kommentar}
                        onChange={(e) => setMaterial({ ...material, Kommentar: e.target.value })}
                    />
                    
                    <TextField
                        multiline
                        placeholder='https://www.example.com'
                        id="outlined-number"
                        label="Link"
                        style={{margin: "0", fontSize: "16px", marginBottom: "10px", marginTop: "10px", width: "100%"}}
                        name="Link"
                        value={material.link}
                        onChange={(e) => setMaterial({ ...material, link: e.target.value })}
                    />
                </div>

                <div style={rightSide}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Titel"
                        style={titleStyle}
                        name="title"
                        value={material.title}
                        onChange={(e) => setMaterial({ ...material, title: e.target.value })}
                    />

                    <TextField
                        required
                        multiline
                        id="outlined-required"
                        label="Beschreibung"
                        style={titleStyle}
                        name="description"
                        value={material.description}
                        onChange={(e) => setMaterial({ ...material, description: e.target.value })}
                    />

                    <TextField
                        required
                        id="outlined-number"
                        placeholder='2 - 4'
                        label="Klassenstufe"
                        type="number"
                        inputProps={{min: 1}}
                        style={titleStyle}
                        name="Klassenstufe"
                        value={material.Klassenstufe}
                        onChange={(e) => setMaterial({ ...material, Klassenstufe: e.target.value })}
                    />

                    <TextField required name="Kategorie" style={titleStyle} id="outlined-number1" select label="Kategorie" SelectProps={{native: true}} value={material.Kategorie} onChange={(e) => setMaterial({ ...material, Kategorie: e.target.value })}>
                        <Kategorie/>
                    </TextField>

                    <TextField required name="Ablageort" style={titleStyle} id="outlined-number1" select label="Ablageort" SelectProps={{native: true}} value={material.Regal} onChange={(e) => setMaterial({ ...material, Regal: e.target.value })}>
                        <Regale/>
                    </TextField>

                    <TextField required name="Fach" style={titleStyle} id="outlined-number1" select label="Fach" SelectProps={{native: true}} value={material.Fach} onChange={(e) => setMaterial({ ...material, Fach: e.target.value })}>
                        <Fach/>
                    </TextField>

                    <TextField required name="Aktuelle Position" style={titleStyle} id="outlined-number1" select label="Aktuelle Position" SelectProps={{native: true}} value={material.AktuellePosition} onChange={(e) => setMaterial({ ...material, AktuellePosition: e.target.value })}>
                        <Regale/>
                    </TextField>

                    <div>
                        <Stack spacing={"15px"} direction="row" style={{marginLeft: "30px", marginBottom: "25px", alignItems: "center"}}>
                            <TextField id="outlined-number" label="Augeliehen" type="number" InputLabelProps={{shrink: true,}} size="medium" inputProps={{min: 0}} style={{width: "90px"}} value={material.Ausgeliehen} onChange={(e) => setMaterial({ ...material, Ausgeliehen: e.target.value })}/>
                            <p style={{fontSize: "17px"}}>Verfügbar von</p>
                            <TextField id="outlined-number" label="Anzahl" type="number" InputLabelProps={{shrink: true,}} size="medium" inputProps={{min: 0}} style={{width: "90px"}} value={material.Anzahl} onChange={(e) => setMaterial({ ...material, Anzahl: e.target.value })}/>
                        </Stack>
                    </div>

                    <div style={{background: "", width: "350px", marginLeft: "30px",}}>  
                        <Stack spacing={"10px"} direction={"row"} style={{marginBottom: "25px", alignItems: "center"}}>
                            <Button variant="contained" style={{width: "100%"}} onClick={handleEdit}>Bearbeiten</Button>
                            <Button variant="contained" style={{width: "100%", background: "red"}} onClick={handleDelete}>Löschen</Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaterialEdit;
