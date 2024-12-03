import logo from './logo.svg';
import './App.css';
import Hoccomponet from './Hoc';
import Cmponet from './Cmponet';
import Display from './componet/Display';
import Signup from './signup/Signup';
import Page from './Page';


function App() {
  const Hoccom =Hoccomponet(Cmponet) 
  return (
    <div className="App">
     <h1>hallow</h1>
     {/* <Hoccom/>
     <Display/> */}
     <Signup/>
     {/* <Page/> */}

    </div>
  );
}

export default App;
