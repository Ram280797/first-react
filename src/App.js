import logo from './logo.svg';
import './App.css';
import Topbar from "./Topbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-lg-12">
      <Topbar></Topbar>
    </div>
    </div>
    </div>
    </>
 
  );
}

export default App;
