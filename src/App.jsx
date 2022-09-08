import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="frase">
        <h2>Ready pa' pedir tu empanada</h2>
      </div>
      <div className="fila">
      <Product
        productName='Nombre y descripcion de la empanada'
        productPrice='RD $350'
        productAddToCart='Carrito'
      />
       <Product
        productName='Nombre y descripcion de la empanada'
        productPrice='RD $350'
        productAddToCart='Carrito'
      />
      <Product
        productName='Nombre y descripcion de la empanada'
        productPrice='RD $350'
        productAddToCart='Carrito'
      />
      </div>
      <div className="fila">
      <Product
        productName='Nombre y descripcion de la empanada'
        productPrice='RD $350'
        productAddToCart='Carrito'
      />
       <Product
        productName='Nombre y descripcion de la empanada'
        productPrice='RD $350'
        productAddToCart='Carrito'
      />
      <Product
        productName='Nombre y descripcion de la empanada'
        productPrice='RD $350'
        productAddToCart='Carrito'
      />
      </div>
      <Footer />
    </div>
  );
}

export default App;
