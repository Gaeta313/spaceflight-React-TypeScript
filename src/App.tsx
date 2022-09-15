import "./App.css";
import MyNav from "./components/MyNav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CardList from "./components/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <Routes>
          <Route path="/" element={<CardList />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
