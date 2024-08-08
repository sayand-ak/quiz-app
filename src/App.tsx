import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Quiz, Result } from './pages';
import Profile from './pages/Profile';

const App = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={< Home/>} />
                    <Route path='/quiz' element={<Quiz/>} />
                    <Route path='/result' element={<Result/>} />
                    <Route path='profile' element={<Profile/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
