import Footer from "./components/Footer";
import Header from "./components/Header";
import { navBars } from "./configs";

function App() {
  return (
    <div className="App">
      <Header data={navBars} />
      <main>content</main>
      <Footer data={navBars} />
    </div>
  );
}

export default App;
