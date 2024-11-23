import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Marriage {
  id: number;
  person1: string;
  person2: string;
  numberGuests: number;
  party: string;
  religious: string;
  honeyMoon: string;
  season: string;
  religion: string;
  city: string;
  style: string;
  time: string;
  local: string;
  budget: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  marriage: Marriage;
}

const initialState: User = {
  id: 0,
  name: "",
  email: "",
  marriage: {
    id: 0,
    person1: "",
    person2: "",
    numberGuests: 0,
    party: "N",
    religious: "N",
    honeyMoon: "N",
    season: "",
    religion: "",
    city: "",
    style: "",
    time: "",
    local: "",
    budget: 5000,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return { ...state, ...action.payload };
    },
    setMarriage(state, action: PayloadAction<Marriage>) {
      state.marriage = { ...action.payload };
    },
    clearUser() {
      return initialState;
    },
  },
});

export const { setUser, setMarriage, clearUser } = userSlice.actions;

export default userSlice.reducer;
