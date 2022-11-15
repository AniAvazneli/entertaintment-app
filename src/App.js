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

function App() {
  return (
    <div className="App">
      <Header />
      <ForPaddings>
        <Search />
        <Trending />
        <Routes>
          <Route exact path="/" element={<Home data={data} />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/series" element={<Series />} />
          <Route exact path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </ForPaddings>
    </div>
  );
}

export default App;

const ForPaddings = styled.div`
  /* padding-left: 16px; */
`;
