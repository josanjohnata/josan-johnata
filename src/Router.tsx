import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
