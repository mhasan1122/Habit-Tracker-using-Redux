import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Box, Button, Grid, Paper,Typography } from '@mui/material';
import { Habit } from '../store/habit-slice';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const HabitList: React.FC = () => {
    const { habits } = useSelector((state: RootState) => state.habits);

    const today =new Date().toISOString().split("T")[0];
  
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {habits.map((habit: Habit) => {
          return <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>

            <Grid container alignSelf="center">
                <Grid>
                    <Typography variant='h6'> {habit.name}</Typography>
                    <Typography variant='body2' color='text.secondary'> 
                      {habit.frequency}
                    </Typography>
                </Grid>

                <Grid xs={12 } sm={6}>
                   <Box sx={{display:"flex",justifyContent:"flex-end",gap:1}}>
                    <Button
                    variant="outlined"
                    color={habit.completedDates.includes(today)
                        ? "success"
                        : "primary"
                     
                    }
                    startIcon={<CheckCircleIcon />}
                    
                    >Mark Complete</Button>

                    <Button
                    variant="outlined"
                    color='error'
                    startIcon={<DeleteIcon/>}
                    >
                        Remove
                        
                    </Button>

                   </Box>

                    

                </Grid>
            </Grid>
          </Paper>;
        })}
      </Box>
    );
  };
  
export default HabitList;