import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import axios from "axios"
import Button from '@mui/material/Button';
import Regale from "./Regale";

const AddMaterial = () => {

    const [materialData, setMaterialData] = useState({
        image: "",
        title: "",
        description: "",
        ISBN: "",
        Kommentar: "",
        Anzahl: "",
        Ausgeliehen: "2",
        Kategorie: "",
        Fach: "",
        Klassenstufe: "",
        Regal: "",
        AktuellePosition: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMaterialData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAddMaterial = async () => {
        try {
            await axios.post("http://localhost:8800/materials", materialData);
            navigate("/");
        } catch (error) {
            console.error("Fehler beim Hinzufügen des Materials:", error);
        }
    };

    return (

        <div style={{width: "800px", background: ""}}>
            <div style={{background: "", margin: "10px"}}>
                <TextField
                required
                id="outlined-required"
                label="Titel"
                style={{width: "100%"}}
                onChange={handleInputChange}
                name="title"
                />
            </div>

            <div style={{background: "", margin: "10px"}}>
                <TextField
                required
                multiline
                id="outlined-required"
                label="Beschreibung"
                style={{width: "100%"}}
                onChange={handleInputChange}
                name="description"
                />
            </div>

            <div style={{display: "flex", background: "", margin: "10px"}}>
                <div style={{marginRight: "5px", width: "33.33%"}}>
                    <TextField
                        required
                        id="outlined-number"
                        label="Anzahl"
                        type="number"
                        inputProps={{min: 0}}
                        style={{width: "100%"}}
                        onChange={handleInputChange}
                        name="Anzahl"
                    />
                </div>
                <div style={{marginRight: "5px", marginLeft: "5px", width: "33.33%"}}>
                    <TextField
                        required
                        id="outlined-number"
                        label="Klassenstufe"
                        type="number"
                        inputProps={{min: 1}}
                        style={{width: "100%"}}
                        onChange={handleInputChange}
                        name="Klassenstufe"
                    />
                </div>
                <div style={{marginLeft: "5px", width: "33.33%"}}>
                    <TextField required name="Kategorie" style={{width: "100%"}} id="outlined-number1" select label="Kategorie" SelectProps={{native: true}} onChange={handleInputChange}>
                        <Regale/>
                    </TextField>
                </div>
            </div>

            <div style={{display: "flex", background: "", margin: "10px"}}>
                <div style={{marginRight: "5px", width: "50%"}}>
                    <TextField required name="Regal" style={{width: "100%"}} id="outlined-number1" select label="Regal" SelectProps={{native: true}} onChange={handleInputChange}>
                        <Regale/>
                    </TextField>
                </div>
                <div style={{marginLeft: "5px", width: "50%"}}> 
                    <TextField required name="AktuellePosition" style={{width: "100%"}} id="outlined-number1" select label="Aktuelle Position" SelectProps={{native: true}} onChange={handleInputChange}>
                        <Regale/>
                    </TextField>
                </div>
            </div>

            <div style={{display: "flex", background: "", margin: "10px"}}>
                <div style={{marginRight: "5px", width: "50%"}}>
                    <TextField required name="Fach" style={{width: "100%"}} id="outlined-number1" select label="Fach" SelectProps={{native: true}} onChange={handleInputChange}>
                        <Regale/>
                    </TextField>
                </div>
                <div style={{marginLeft: "5px", width: "50%"}}>
                <TextField
                    id="outlined-text"
                    label="ISBN"
                    style={{width: "100%"}}
                    onChange={handleInputChange}
                    name="ISBN"
                />
                </div>
            </div>

            <div style={{background: "", margin: "10px"}}>
                <TextField
                    multiline
                    id="outlined-text"
                    label="Kommentar"
                    style={{width: "100%"}}
                    onChange={handleInputChange}
                    name="Kommentar"
                />
            </div>

            <div style={{background: "", margin: "10px"}}>
                <TextField
                    id="outlined-text"
                    label="Bild"
                    style={{width: "100%"}}
                    onChange={handleInputChange}
                    name="Image"
                />
            </div>

            <div style={{background: "", margin: "10px"}}>
                <Button variant="contained" style={{width: "100%", marginTop: "35px"}} onClick={handleAddMaterial}>Hinzufügen</Button>
            </div>
        </div>
      );
    }

export default AddMaterial