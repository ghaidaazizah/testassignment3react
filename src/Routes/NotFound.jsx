import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 | Not Found</h1>
      <button data-testid="back" onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default NotFound;
