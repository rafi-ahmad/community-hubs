import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from './state';
import { Shell } from './Shell';
import Pages from './Pages';
import './index.css';

function App() {
  return <Provider><BrowserRouter><Shell><Routes>
    <Route path="/" element={<Pages/>}/>
    <Route path="/communities" element={<Pages/>}/><Route path="/communities/:slug" element={<Pages/>}/>
    <Route path="/events" element={<Pages/>}/><Route path="/events/:slug" element={<Pages/>}/>
    <Route path="/news" element={<Pages/>}/><Route path="/news/:slug" element={<Pages/>}/>
    <Route path="/resources" element={<Pages/>}/><Route path="/resources/:slug" element={<Pages/>}/>
    <Route path="/members" element={<Pages/>}/><Route path="/members/:username" element={<Pages/>}/>
    <Route path="/about" element={<Pages/>}/><Route path="/get-involved" element={<Pages/>}/><Route path="/contact" element={<Pages/>}/>
    <Route path="/search" element={<Pages/>}/><Route path="/login" element={<Pages/>}/><Route path="/register" element={<Pages/>}/>
    <Route path="/profile" element={<Pages/>}/><Route path="/my-communities" element={<Pages/>}/><Route path="/my-events" element={<Pages/>}/><Route path="/saved" element={<Pages/>}/>
    <Route path="/community/:slug" element={<Pages/>}/><Route path="/community/:slug/about" element={<Pages/>}/><Route path="/community/:slug/discussions" element={<Pages/>}/>
    <Route path="/community/:slug/events" element={<Pages/>}/><Route path="/community/:slug/resources" element={<Pages/>}/><Route path="/community/:slug/members" element={<Pages/>}/>
    <Route path="/create-community" element={<Pages/>}/><Route path="/community/:slug/manage" element={<Pages/>}/><Route path="/community/:slug/manage/members" element={<Pages/>}/>
    <Route path="/community/:slug/manage/events" element={<Pages/>}/><Route path="/community/:slug/manage/resources" element={<Pages/>}/><Route path="/community/:slug/manage/settings" element={<Pages/>}/>
    <Route path="/countries" element={<Pages/>}/><Route path="*" element={<Pages/>}/>
  </Routes></Shell></BrowserRouter></Provider>;
}
export default App;
