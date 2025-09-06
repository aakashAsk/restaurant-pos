import { Category } from "@/src/interfaces/category.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { applyFilters } from "../../helper/applyFilter";

interface CategoryMenuState {
  categoriesWithMenus: Category[];
  filteredCategories: Category[];
  loading: boolean;
  error: string | null;
  filters: { type: string[], tags: string[] },
}

const initialState: CategoryMenuState = {
  categoriesWithMenus: [],
  filters: { type: [], tags: [] },
  filteredCategories: [],
  loading: false,
  error: null,
};

function updateArray(
  existing: string[] = [], 
  incoming?: string[], 
  mode: "add" | "remove" = "add"
) {
  if (!incoming || incoming.length === 0) return existing;

  if (mode === "add") {
    return Array.from(new Set([...existing, ...incoming]));
  } else {
    return existing.filter(item => !incoming.includes(item));
  }
}

const categoryMenuSlice = createSlice({
  name: "categoryMenu",
  initialState,
  reducers: {
    setCategoriesWithMenus: (
      state,
      action: PayloadAction<{ categoriesWithMenus: Category[] }>
    ) => {
      state.categoriesWithMenus = action.payload.categoriesWithMenus;
      state.filteredCategories = action.payload.categoriesWithMenus;
      state.loading = false;
      state.error = null;
    },
    setFilters: (state, action: PayloadAction<Partial<any>>) => {
      const { type, tags, action: filterAction, ...rest } = action.payload;

      // Update state.filters
      state.filters = {
        ...state.filters,
        ...rest,
        tags: updateArray(state.filters.tags, tags, filterAction),
        type: updateArray(state.filters.type, type, filterAction),
      };

      // Reset categories
      state.filteredCategories = [...state.categoriesWithMenus];

      // Check if no filter applied
      const noFilterApplied =
        (!state.filters.type || state.filters.type.length === 0) &&
        (!state.filters.tags || state.filters.tags.length === 0);

      if (noFilterApplied) {
        return;
      }
      // Apply filters on a copy
      state.filteredCategories = applyFilters(state.categoriesWithMenus, state.filters);

    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCategoriesWithMenus, setFilters, setLoading, setError } =
  categoryMenuSlice.actions;

export default categoryMenuSlice.reducer;
