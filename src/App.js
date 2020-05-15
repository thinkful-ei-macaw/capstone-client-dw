import React, {Component} from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import NewProjectForm from './NewProjectForm/NewProjectForm';
import NewCardForm from './NewCardForm/NewCardForm';
import {Route} from 'react-router-dom';
import List from './ProjectList/List';
import CardList from './CardList/CardList';
import Navbar from './Navbar/Navbar';
import ProjectManager from './ProjectManager/ProjectManager';


class App extends Component {

  render(){
  return (
    <div className="App">
    <Navbar />
     <Route exact path={"/"} component={LandingPage} />
     <Route path={"/new-project"} component={NewProjectForm} />
     <Route path={"/new-card/:projectId"} component={NewCardForm} />
     <Route path={"/list"} component={List} />
     <Route path={"/card-list/:projectId"} component={CardList} />
     <Route path={"/project-manager/:projectId"} component={ProjectManager} />

    </div>
  );
}
}

export default App;
