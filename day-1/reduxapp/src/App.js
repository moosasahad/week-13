
import './App.css';

import Hoc from './Hoc';
import Raoing from './Raoing';
import Hocr from './Hocr'
import { useDispatch,useSelector} from 'react-redux'
import { incrimenting } from './redux/slice';
import Newhoc from './Newhoc';

function App() {
  const Hoccompo = Hoc(Raoing)
  const Hooc =Hocr(Raoing) 
  const value = useSelector((state)=>state.counters.count)
  const dispatch = useDispatch()
  const Newh = Newhoc(Raoing)
  return (
    <div className="App">
      <Hoccompo/>
      <Hooc/>
      <Newh/>
   <h4>hdshgf {value}</h4>
   <button onClick={()=>dispatch(incrimenting())}>+++</button>
    </div>
  );
}


export default App;
