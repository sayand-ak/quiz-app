import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Quiz } from './pages';

const App = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={< Home/>} />
                    <Route path='/quiz' element={<Quiz/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
