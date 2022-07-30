// import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

// import "./font/font.css";
// import Footer from "./component/ui/footer/footer";
// import Header from "./component/ui/header/header";
import MainPage from "./component/ui/pages/mainPage";
import SecondPages from "./component/ui/pages/secondPages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="mainpage" element={<MainPage />} /> */}
      <Route path="ipsum" element={<SecondPages />} />
      {/* <Header /> */}
      {/* <MainPage /> */}
      {/* <Footer /> */}
    </Routes>
  );
}

export default App;
