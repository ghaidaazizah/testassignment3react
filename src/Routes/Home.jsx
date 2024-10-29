import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Student Portal</h1>
      <button data-testid="student-btn" onClick={() => navigate('/student')}>All Student</button>
    </div>
  );
};

export default Home;
