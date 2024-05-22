import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage.jsx';
import MyPage from './pages/myPage/MyPage.jsx';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState([
    {
      name:'홍길동',
      age:19,
      address:'인천광역시'
    }
  ])
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/myPage" element={<MyPage userData={userData} setUserData={setUserData} />} />
    </Routes>
  );
}

export default App;