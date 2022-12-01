import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import { MyProjects } from './pages/MyProjects';
import { SocialMedia } from './pages/SocialMedias';
import { Contacts } from './pages/Contacts';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-projects" element={<MyProjects />} />
      <Route path="/social-medias" element={<SocialMedia />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}
