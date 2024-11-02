import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Habit {
    id:string;
    name:string;
    frequency:"daily" | "weekly";
    completedDates:string[];
    createAt:string;
}

interface HabitState{
    habits:Habit[];
}
const initialState:HabitState={
    habits:[],
};

const habitSlice =createSlice({
    name:"habits",
    initialState,
    reducers:{

        addHabit:(state,action:PayloadAction<{name:string;frequency:"daily" | "weekly"}>)=>{


            const newHabit:Habit ={
                id:Date.now().toString(),
                name:action.payload.name,
                frequency:action.payload.frequency,
                completedDates:[],
                createAt:new Date().toISOString(),

            };

            state.habits.push(newHabit);
        },
    },
});

export const {addHabit}=habitSlice.actions;

export default habitSlice.reducer;