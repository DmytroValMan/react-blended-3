import { Route, Routes } from 'react-router-dom';
import Heading from './components/Heading/Heading';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home.jsx'));
const SearchCountry = lazy(() =>
  import('./pages/SearchCountry/SearchCountry.jsx'),
);
const Country = lazy(() => import('./pages/Country/Country.jsx'));
const Navigate = lazy(() => import('./components/Navigate/Navigate.jsx'));

export const App = () => {
  return (
    <div>
      <Navigate />
      <Suspense fallback={<p>Please, wait...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<SearchCountry />} />
          <Route path="/country/:countryId" element={<Country />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
