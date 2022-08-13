import { Route, Routes } from 'react-router-dom';
import { AirPods } from './pages/airPods/airPods.component';
import { Apple } from './pages/apple/apple.component';

function App() {
  return (
    <Routes>
      <Route path='' element={<Apple />} />
      <Route path='/airpods' element={<AirPods />} />
    </Routes>
  );
}

export default App;
