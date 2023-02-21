import {ItemListContainer}  from "./components/ItemListContainer/ItemListContainer";
import { CartWidget }       from "./components/CartWidget/CartWidget";
import { Navbar }           from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button }           from 'react-bootstrap';
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <div className="container">
        <Button variant="danger" size="sm"> <CartWidget /> </Button>
      </div>
    </div>
  );
}
export default App;