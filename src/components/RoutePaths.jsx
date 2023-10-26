import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import ErrorPage from '../routes/ErrorPage';
import Resources from '../routes/Resources';
import Questions from '../routes/Questions';
import Recs from '../routes/Recs';


const RoutePaths = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Resources" element={<Resources />} />
            <Route path="/Questions" element={<Questions />} />
            <Route path="/Recs" element={<Recs />} />
            <Route path='*' element={<ErrorPage />}/>
        </Routes>
        </>
    )
}

export default RoutePaths
        