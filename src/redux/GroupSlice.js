import { createSlice } from "@reduxjs/toolkit";

const GroupSlice = createSlice({
  name: "groups",
  initialState: {
    colors: [],
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
      state.colors = Array.from(
        new Set(
          action.payload
            .map(group => group.avatar_color)
            .map(color => {
              if (color === undefined) {
                return "Нет аватарки";
              }
              return color;
            })
        )
      );
    },
    selectAll(state, action) {
      state.groups = state.cached;
      state.filterParams = {
        byPrivateType: { state: false, condition: null },
        byAvatarColor: { state: false, condition: null },
        byFriends: { state: false, condition: null },
      };
    },
    getFilteredGroups(state, action) {
      state.groups = state.cached;
      if (state.filterParams.byPrivateType.state) {
        state.groups = state.groups.filter(
          group => group.closed === state.filterParams.byPrivateType.condition
        );
      }
      if (state.filterParams.byAvatarColor.state) {
        if (state.filterParams.byAvatarColor.condition === "Нет аватарки") {
          state.groups = state.groups.filter(
            group => group.avatar_color === undefined
          );
        } else {
          state.groups = state.groups.filter(
            group =>
              group.avatar_color === state.filterParams.byAvatarColor.condition
          );
        }
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
    selectColor(state, action) {
      state.filterParams = {
        ...state.filterParams,
        byAvatarColor: action.payload,
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
  selectColor,
} = GroupSlice.actions;
export default GroupSlice.reducer;
