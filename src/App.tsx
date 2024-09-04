import './App.css'
// import Home from './Pages/Home/Home';
import Home2 from './Pages/Home/Home2'

import {
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from 'recoil';

function App() {

  return (
    <div
    className = 'app'
    >
      <div
      className = 'app__header'
      >

      </div>
      <RecoilRoot>
        <Home2 />
        {/* <Home /> */}
      </RecoilRoot>
      <div
      className = 'app__footer'
      >

      </div>
    </div>
  )
}

export default App
