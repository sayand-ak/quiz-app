import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Quiz, Result } from './pages';

const App = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={< Home/>} />
                    <Route path='/quiz' element={<Quiz/>} />
                    <Route path='/result' element={<Result/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
