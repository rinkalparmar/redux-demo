import { createSlice } from '@reduxjs/toolkit';

const exitsUsers = JSON.parse(localStorage.getItem("userData")) || [];

const initialState = {
    users: exitsUsers,
    isAuthenticate: false,
    error: null,
};

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            // console.log("state",state)
            // console.log("action",action)
            const { navigate, input } = action.payload;//input as key 
            const { email, password } = input;//here inside input key we take email,password as key
            const findUser = state.users.find((data) => { if (data.email === email && data.password === password) { return data; } });
            console.log("findUser", findUser.email, findUser.password);
            if (!findUser) {
                console.log("wrong email and password");
                state.error = "wrong email and password";
                return;
            }
            else {
                console.log("Login Successfull");
                navigate("/home");
                state.isAuthenticate = true;
                localStorage.setItem("isAuthenticate", JSON.stringify(state.isAuthenticate));
            }

        },
        logOutUser: (state, action) => {


        },
        signUpUser: (state, action) => {
            const newUser = action.payload;
            console.log("object", newUser);
            const findUserData = state.users.find((data) => { if (data.email === newUser.email) { return data; } });
            console.log("findUserData", findUserData);
            if (findUserData) {
                console.log("user already exits");
                state.error = "User already exists with this email.";
                return;
            }
            state.users.push(newUser);
            localStorage.setItem("userData", JSON.stringify(state.users));
            console.log("user", state.users);
        }
    }
});

console.log(userSlice.actions);
export const { loginUser, logOutUser, signUpUser } = userSlice.actions;
export default userSlice;