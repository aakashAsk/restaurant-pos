import { FilterTag } from "@/src/interfaces/filtertag.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterTagsState {
  filterTags: FilterTag[];
  loading: boolean;
  error: string | null;
}

const initialState: FilterTagsState = {
  filterTags: [],
  loading: false,
  error: null,
};

const filterTagsSlice = createSlice({
  name: "filterTags",
  initialState,
  reducers: {
    setFilterTags: (state, action: PayloadAction<{ filterTags: FilterTag[]}>) => {
      state.filterTags = action.payload.filterTags;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setFilterTags, setLoading, setError } = filterTagsSlice.actions;
export default filterTagsSlice.reducer;
