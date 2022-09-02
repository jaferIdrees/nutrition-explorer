import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  return (
    <>
      <button type="button" className="backBtn" onClick={() => navigate(-1)}>&lt;</button>
    </>
  );
}

export default BackButton;
