import logo from './logo.svg';
import './App.css';

import Firsts from './components/Firsts';
import Ssecond from './components/Ssecond';
import { Demo, Textss } from './components/Textss';
import { Button } from './components/Button';

function App() {
  return (
    <>
    <Firsts head="my name is nabin"/>
    <Button button_content="sign in "/>
    <Ssecond head="tokha is my home town"/>
    <Button button_content="register"/>
  <Textss/>
  <Button button_content="admin"/>
  <Demo/>
  <Button button_content="click now"/>


  
  
    
    </>
  );
}

export default App;
