import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import { incriment } from './redux/slice';
import Hoc from './Hoc';
import Raoing from './Raoing';
import Hocr from './Hocr'

function App() {
  const Hoccompo = Hoc(Raoing)
  const dispatch = useDispatch()
  const Hooc =Hocr(Raoing) 
  const data = useSelector((state)=>state.coun.value)
  return (
    <div className="App">
      <Hoccompo/>
      <Hooc/>
      {data}
      <button onClick={()=>dispatch(incriment())}>+</button>
      <select name="" id="">
      </select>
    </div>
  );
}


export default App;
