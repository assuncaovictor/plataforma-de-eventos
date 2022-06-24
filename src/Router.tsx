import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>}></Route>
            <Route path="/event" element={<Event />}></Route>
            <Route path="/event/lesson/:lesson" element={<Event />}></Route>
        </Routes>
    );
}
