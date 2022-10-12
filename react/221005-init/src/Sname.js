import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import './Student.css'

function Student() {
    const { id } = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    // const id2 = useParams().id;

    const navigate = useNavigate();
        return (
            <div className='top1'>
                <h5>학생의 이름은 <span className='gre'>{id}</span> 입니다.</h5>
                <h5>실제 이름은 <span className='red'>{searchParams.get("name")}</span></h5>

                <button onClick={() => navigate(-1)}>이전 페이지로</button>
            </div>
        );
}

export default Student;