import { Route, Routes } from "react-router-dom";
import "./App.css";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Search from "./components/Search";
import Series from "./components/Series";
import Trending from "./components/Tranding";
import data from "./data.json";
import styled from "styled-components";
import {useState} from "react"

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <Header data={data}  />
      <ForPaddings>
        <Search data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Trending data={data} />
        <Routes base>
          <Route path="/entertaintment-app" element={<Home data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
          <Route path="/entertaintment-app/movies" element={<Movies data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
          <Route path="/entertaintment-app/series" element={<Series data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
          <Route path="/entertaintment-app/bookmarks" element={<Bookmarks data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        </Routes>
      </ForPaddings>
    </div>
  );
}

export default App;

const ForPaddings = styled.div`
  /* padding-left: 16px; */
`;
