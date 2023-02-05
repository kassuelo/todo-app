/* eslint-disable import/no-anonymous-default-export */
import { Navigate, Routes, Route } from "react-router-dom";

import Todo from "../todo/todo";
import About from "../about/about";

export default (props) => (
    <Routes>
        <Route path="/todos" element={<Todo />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Navigate to="/todos" />} />
    </Routes>
);
