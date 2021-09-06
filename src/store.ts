import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// ...
import TicketReducer from "./pages/TicketList/TicketSlice";
import LoginReducer from "./components/Login/loginSlice";
import UserReducer from "./pages/Dashboard/dashboardSlice";
import AddTicketReducer from "./pages/AddTicket/addTicketSlice"
export const store = configureStore({
  reducer: {
    Tickets: TicketReducer,
    Login: LoginReducer,
    User: UserReducer,
    AddTicket: AddTicketReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
