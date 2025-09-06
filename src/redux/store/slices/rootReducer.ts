// rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import categoryMenuReducer from "./categoryWithMenus";
import filterTagsReducer from "./filtertags";

const rootReducer = combineReducers({
  categoryMenu: categoryMenuReducer,
  filterTags: filterTagsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
