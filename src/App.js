import Footer from "./components/Footer";
import Header from "./components/Header";
import { navBars } from "./configs";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header data={navBars} />
      <main><HomePage/></main>
      <Footer data={navBars} />
    </div>
  );
}

export default App;
