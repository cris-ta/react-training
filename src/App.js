import Footer from "./components/Footer";
import Header from "./components/Header";
import { about, navBars, store, support } from "./configs";

function App() {
  return (
    <div className="App">
      <Header data={navBars} />
      <main className="main">Content</main>
      <Footer store={store} support={support} about = {about}/>
    </div>
  );
}

export default App;
