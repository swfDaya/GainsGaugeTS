import './App.css'
// import Home from './Pages/Home/Home';
// import Home2 from './Pages/Home/Home2'
import TrackingForDay from './Pages/Home/TrackingForDay';


// import {
//   RecoilRoot,
//   // atom,
//   // selector,
//   // useRecoilState,
//   // useRecoilValue,
// } from 'recoil';

function App() {

  return (
    <div
    className = 'app'
    >
      <div
      className = 'app__header'
      >

      </div>
      <TrackingForDay />
      <div
      className = 'app__footer'
      >

      </div>
    </div>
  )
}

export default App
