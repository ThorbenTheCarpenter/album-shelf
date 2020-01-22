import React from 'react';
import "./style/App.css"
import AddForm from './pages/Forms/AddForm';
import EditForm from "./pages/Forms/EditForm"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ObjectList from './pages/ObjectList/one_to_rule_them_all'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ObjectList} />
        <Route path='/addObj' exact component={AddForm} />
        <Route path='/editObj/:id' exact component={EditForm} />
        <Route path='/' render={() => <h1>404 <br /> Page was not found!</h1>} />
      </Switch>
    </BrowserRouter>
  )
}


export default App;