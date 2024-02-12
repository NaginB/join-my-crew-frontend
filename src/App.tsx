import React from 'react';
import './App.css';
import AppRoutes from './Routes';
import { useSelector } from 'react-redux';
import { RootState } from './Redux/store';

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
