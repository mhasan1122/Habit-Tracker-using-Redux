import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { addHabit } from '../store/habit-slice';

const Addhabit: React.FC= () => {
    const[name, setname]=useState<string>("");
    const[frequency,setfrequency]=useState<"daily" |"weekly">("daily");
    const dispatch= useDispatch<AppDispatch>();

   const handleSubmit=(e:React.FormEvent)=>{

    e.preventDefault();

    if(name.trim()){
        dispatch(
            addHabit({name,frequency,}));
            setname("");
    }
   }


  return (
    <form onSubmit={handleSubmit}>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            gap:2,
        }}>

            <TextField label="Habit Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder='Enter Habit Name'
            fullWidth
            />

            <FormControl fullWidth>

                <InputLabel>Frequency</InputLabel>
                <Select
                value={frequency}
                onChange={(e) => setfrequency(e.target.value as "daily" |"weekly")}
                
                >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>


                </Select>
            </FormControl>

            <Button type='submit' variant='contained'>Add Habit</Button>

        </Box>
    </form>
  )
}

export default Addhabit;