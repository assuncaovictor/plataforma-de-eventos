import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribe />}></Route>
            <Route path="/event" element={<Event />}></Route>
            <Route path="/event/lesson/:lesson" element={<Event />}></Route>
        </Routes>
    );
}
