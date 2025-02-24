import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from "./components/Home.jsx";
import {Dashboard} from "./components/Dashboard.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>

            </Routes>
        </Router>
    );
}

export default App;