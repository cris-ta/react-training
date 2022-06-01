import Footer from "./components/Footer";
import Header from "./components/Header";
import { navBars, info, support, contact } from "./configs";


function App() {
  return (
    <div className="App">
      <Header data={navBars} />
      <main>Content</main>
      <Footer info={info} support={support} contact={contact}/>
    </div>
  );
}

export default App;
