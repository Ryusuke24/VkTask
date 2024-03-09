import { createSlice } from "@reduxjs/toolkit";
import groupsData from "../groups.json";

const GroupSlice = createSlice({
  name: "groups",
  initialState: {
    cached: [],
    groups: [],
    filterParams: {
      byPrivateType: { state: false, condition: null },
      byAvatarColor: { state: false, condition: null },
      byFriends: { state: false, condition: null },
    },
  },
  reducers: {
    getGroups(state, action) {
      state.groups = action.payload;
      state.cached = action.payload;
    },
    selectAll(state, action) {
      state.groups = state.cached;
    },
    getFilteredGroups(state, action) {
      state.groups = state.cached;
      if (state.filterParams.byPrivateType.state) {
        state.groups = state.groups.filter(
          group => group.closed === state.filterParams.byPrivateType.condition
        );
      }
      if (state.filterParams.byAvatarColor.state) {
        state.groups = state.groups.filter(
          group =>
            group.avatar_color === state.filterParams.byAvatarColor.condition
        );
      }
      if (state.filterParams.byFriends.state) {
        if (state.filterParams.byFriends.condition === false) {
          state.groups = state.groups.filter(group => !group.friends);
        } else if (state.filterParams.byFriends.condition === true) {
          state.groups = state.groups.filter(group => group.friends);
        }
      }
    },
    selectPrivateType(state, action) {
      state.filterParams = {
        ...state.filterParams,
        byPrivateType: action.payload,
      };
    },
    selectFriends(state, action) {
      state.filterParams = {
        ...state.filterParams,
        byFriends: action.payload,
      };
    },
  },
});

export const {
  selectAll,
  selectPrivateType,
  getGroups,
  getFilteredGroups,
  selectFriends,
} = GroupSlice.actions;
export default GroupSlice.reducer;
