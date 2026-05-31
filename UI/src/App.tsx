import { Routes, Route } from "react-router";
import Home from "./routes/Home.tsx";
import Create from "./routes/Create.tsx";
import Listing from "./routes/Overview.tsx";
import Missing from "./routes/ErrorPage.tsx";

export default function App(){
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create/>}/>
        <Route path="/overview" element={<Listing/>}/>
        <Route path="*" element={<Missing/>}/>
      </Routes>
  );
}