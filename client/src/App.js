import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Transaction from './components/Transaction';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Welcome />
        <Transaction />
        <Footer />
        </Navbar>
    </div>
  );
}

export default App;
