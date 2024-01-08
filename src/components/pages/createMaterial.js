import React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


const createMaterial = () => {
    return (  
        <Container id="Block" style={{ textAlign: 'center', marginTop: '50px' }}>
            <TextField label="Titel" fullWidth margin="normal" />
            <TextField label="ISBN" fullWidth margin="normal" />
            <TextField label="Beschreibung" fullWidth multiline rows={4} margin="normal" />
            <Input type="file" accept="image/*" />
            
            <FormControl fullWidth margin="normal">
                <InputLabel>Kategorie</InputLabel>
                <Select>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                </Select>
            </FormControl>

            <TextField label="Fach" fullWidth margin="normal" />
            <TextField label="Regal" fullWidth margin="normal" />
            <TextField label="Klassenstufe" fullWidth margin="normal" />
            <TextField label="Aktuelle Position" fullWidth margin="normal" />

            <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Speichern
            </Button>
        </Container>
    );
}
 
export default createMaterial;