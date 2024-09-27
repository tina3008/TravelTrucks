import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk(
   "tasks/fetchAll",
   async (_, thunkAPI) => {
     try {
       const response = await axios.get("/campers");
       console.log("response============", response);
       return response.data;
     } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
     }
   }
 );