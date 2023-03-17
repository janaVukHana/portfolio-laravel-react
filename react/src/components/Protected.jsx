import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Protected = ({children}) => {

    const {token} = useStateContext()

    if (!token) {
        return <Navigate to="/login" replace />;
    }
        
    return children;
};

export default Protected;