import { Routes, Route } from 'react-router-dom';
import PhotoInteractivity from "./components/PhotoInteractivity/PhotoInteractivity"
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PhotoInteractivity />} />  
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default App
