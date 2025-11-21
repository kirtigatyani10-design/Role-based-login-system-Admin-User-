import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        signup: (state, action) => {
            const { name, email, password, role } = action.payload;
            const userData = { name, email, password, role };

            localStorage.setItem("user", JSON.stringify(userData));

            state.user = userData;
            state.isAuthenticated = false;
            state.token = null;
        },

        login: (state, action) => {
            const { email, password } = action.payload;
            const savedUser = JSON.parse(localStorage.getItem("user"));

            // If wrong email or password → return error
            if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
                state.isAuthenticated = false;
                return;
            }

            // If correct → generate token
            const fakeToken =
                "token_" + Math.random().toString(36).substring(2) + Date.now();

            localStorage.setItem("token", fakeToken);

            state.token = fakeToken;
            state.user = savedUser;
            state.isAuthenticated = true;
        },

        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;

            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
