import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Student from './Student';
import Sname from './Sname';

const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter>
                {/* <Link to = '/'>페이지</Link>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/product/:id" element={<Product />}></Route>
                </Routes> */}
                
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/student/:id" element={<Student />}></Route>
                    <Route path="/sname/:id" element={<Sname />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;