import { Routes, Route } from "react-router";
import Home from "./routes/Home.tsx";
import Create from "./routes/Create.tsx";
import Listing from "./routes/Overview.tsx";
import Missing from "./routes/ErrorPage.tsx";
import {Header, Footer} from "./components/layout.tsx"
import { Recommend } from "./routes/Recommend.tsx";
import { RecommendResult } from "./routes/Results.tsx";

export default function App(){
  return (
    <div className="bg-back absolute flex h-screen w-screen items-center justify-center justify-items-center">
      <Header/>
      <div className="bg-surface relative size-[80%] m-10 p-10 justify-content-center border-edge border-2 align-items-center rounded-2xl">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/recommend" element={<Recommend/>}/>
          <Route path="/recommend/res" element={<RecommendResult/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/overview" element={<Listing/>}/>
          <Route path="*" element={<Missing/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}