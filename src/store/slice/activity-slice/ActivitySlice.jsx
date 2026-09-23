import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../../services/https.services";

export const fetchActivities = createAsyncThunk(
  "activities/fetchActivities",
  async (page = 1, thunkAPI) => {
    try {
      const data = await getRequest(`admin/activities?page=${page}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

export const addNewActivity = createAsyncThunk(
  "activities/addNewActivity",
  async (formData, thunkAPI) => {
    try {
      const data = await postRequest(
        "/admin/activities",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);

const activitySlice = createSlice({
  name: "activities",

  initialState: {
    activitiesList: [],
    hasMore: false,
    lastPage: 1,
    isLoading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

  
      .addCase(addNewActivity.fulfilled, (state, action) => {
        const newActivity = action.payload?.data || action.payload;
        state.activitiesList = [
          newActivity,
          ...state.activitiesList,
        ];
      })

    
      .addCase(fetchActivities.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.isLoading = false;

        const responseData = action.payload?.data || action.payload;

        state.activitiesList = Array.isArray(responseData) ? responseData : [];
        state.hasMore = action.payload?.hasMore ?? false;
        state.lastPage = action.payload?.lastPage ?? 1;

        state.error = null;
      })

      .addCase(fetchActivities.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "فشل تحميل الأنشطة";
        state.activitiesList = [];
        state.hasMore = false;
      });
  },
});

export default activitySlice.reducer;