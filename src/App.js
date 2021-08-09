import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/gallery/Home";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/layout/HeroSection";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route,Switch,withRouter} from "react-router-dom";
import AddImage from "./components/gallery/AddImage";
import EditImage from "./components/gallery/EditImage";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery/add" component={AddImage} />
          <Route exact path="/gallery/edit/:id" component={EditImage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
