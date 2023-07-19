import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import { Detail } from '../features/detail/Detail';
import { useParams } from "react-router-dom";

export const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <Detail name={name}/>
    </div>
  );
};
