import {Link, useLocation} from 'react-router-dom'
import './Student.css'

function Main() {
    const location = useLocation();
    return (
        <div>
            {/* <h1>Main state = {location.state}</h1>

            <Link to="/product/1">1번 상품</Link>
            <br />
            <Link to="/product/2">2번 상품</Link>
            <br />
            <Link to="/product/1?search=productName&q=demo#test">a번 상품</Link> */}
            
            <div className='top'>
                <Link to="/">
                        <h2>ReactRouter 실습</h2>
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/student/sesac">학생SeSAC</Link></li>
                        <li><Link to="/student/codingon">코딩온</Link></li>
                        <li><Link to="/sname/new?name=sesac&key=id#codingon">searchParams</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Main;