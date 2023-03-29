import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Protected = ({children}) => {

    const {token, setNotification} = useStateContext()

    if (!token) {
        setNotification('You need to be auth user')
        return <Navigate to="/login" replace />;
    }
        
    return children;
};

export default Protected;