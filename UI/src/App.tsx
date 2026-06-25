import { Routes, Route } from "react-router";
import Home from "./routes/Home.tsx";
import Create from "./routes/Create.tsx";
import Listing from "./routes/Overview.tsx";
import Missing from "./routes/ErrorPage.tsx";

export default function App(){
  return (
    <div className="bg-back h-screen w-screen items-center justify-center justify-items-center">
      <div className="bg-surface size-[80%] m-10 p-10 justify-content-center align-items-center absolute broder-edge rounded-2xl">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create/>}/>
        <Route path="/overview" element={<Listing/>}/>
        <Route path="*" element={<Missing/>}/>
      </Routes>
      </div>
    </div>
  );
}