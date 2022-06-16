import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import { navBars, info, support, contact } from "./configs";
import { Routes,Route } from "react-router-dom";
import Register from "./pages/Register";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import CollectionPage from "./pages/Collection";


function App() {
  return (
    <div className="App">
      <Header data={navBars} />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
          <Route path="/collection" element={<CollectionPage/>}/>
        </Routes>
      </main>
      <Footer info={info} support={support} contact={contact}/>
    </div>
  );
}
export default App;
