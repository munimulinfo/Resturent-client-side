import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
const PraivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <div>
            <progress className="progress w-56 progress-warning h-8"></progress>
        </div>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location}} replace></Navigate>
};

export default PraivateRoute;