import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import { SocialMedia } from './pages/SocialMedias';
import { Contacts } from './pages/Contacts';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/social-medias" element={<SocialMedia />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}
