import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import axios from "axios"
import Button from '@mui/material/Button';
import Regale from "./Regale";
import Fach from "./Fach";
import Kategorie from "./Kategorie";

const AddMaterial = () => {
    const [errors, setErrors] = useState({});
    const [materialData, setMaterialData] = useState({
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

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMaterialData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        // Füge für jedes erforderliche Feld eine Validierung hinzu
        if (!materialData.title) {
            newErrors.title = "Titel ist erforderlich";
        }
        if (!materialData.description) {
            newErrors.description = "Beschreibung ist erforderlich";
        }
        if (!materialData.Anzahl) {
            newErrors.description = "Beschreibung ist erforderlich";
        }
        if (!materialData.Klassenstufe) {
            newErrors.description = "Beschreibung ist erforderlich";
        }
        if (!materialData.Kategorie) {
            newErrors.description = "Beschreibung ist erforderlich";
        }
        if (!materialData.Regal) {
            newErrors.description = "Beschreibung ist erforderlich";
        }
        if (!materialData.AktuellePosition) {
            newErrors.description = "Beschreibung ist erforderlich";
        }
        if (!materialData.Fach) {
            newErrors.description = "Beschreibung ist erforderlich";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleAddMaterial = async () => {
        if (validateForm()) {
            try {
                await axios.post("http://localhost:8800/materials", materialData);
                navigate("/");
            } catch (error) {
                console.error("Fehler beim Hinzufügen des Materials:", error);
            }
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
                        type=""
                        inputProps={{min: 1}}
                        style={{width: "100%"}}
                        onChange={handleInputChange}
                        name="Klassenstufe"
                    />
                </div>
                <div style={{marginLeft: "5px", width: "33.33%"}}>
                    <TextField required name="Kategorie" style={{width: "100%"}} id="outlined-number1" select label="Kategorie" SelectProps={{native: true}} onChange={handleInputChange}>
                        <Kategorie/>
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
                    <TextField required name="Fach" style={{width: "100%"}} id="outlined-number1" select label="Unterrichtsfach" SelectProps={{native: true}} onChange={handleInputChange}>
                        <Fach/>
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
                <TextField
                    id="outlined-text"
                    label="Link"
                    style={{width: "100%"}}
                    onChange={handleInputChange}
                    name="link"
                />
            </div>

            <div style={{background: "", margin: "10px"}}>
                <Button variant="contained" style={{width: "100%", marginTop: "35px"}} onClick={handleAddMaterial}>Hinzufügen</Button>
            </div>
        </div>
      );
    }

export default AddMaterial