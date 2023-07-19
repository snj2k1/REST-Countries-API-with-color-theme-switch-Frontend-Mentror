import { useNavigate } from "react-router-dom";
import { Info } from "../../components/Info"
import { useDetail } from "./use-detail";

const Detail = ({name}) => {
  const navigate = useNavigate();
  const [currentCountry] = useDetail(name);
  
  return(
    <>
      {currentCountry.status === 'loading' && <h2>Loading...</h2>}
      {currentCountry.error && <h2>Failed to load...</h2>}
      {currentCountry.currentCountry && <Info push={navigate} {...currentCountry.currentCountry} />}
    </>
  )
}

export {Detail}