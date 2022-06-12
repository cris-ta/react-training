import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import { navBars, info, support, contact } from "./configs";
import { Routes,Route } from "react-router-dom";
import Register from "./pages/Register";


function App() {
  return (
    <div className="App">
      <Header data={navBars} />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </main>
      <Footer info={info} support={support} contact={contact}/>
    </div>
  );
}
export default App;
