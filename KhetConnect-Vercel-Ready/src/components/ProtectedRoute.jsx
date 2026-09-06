import {Navigate,useLocation} from 'react-router-dom';import {useAuth} from '../context/AuthContext';
export default function ProtectedRoute({children,requireAdmin=false}){const{user}=useAuth();const loc=useLocation();if(!user)return <Navigate to="/login" state={{from:loc.pathname}} replace/>;if(requireAdmin&&user.role!=='ADMIN')return <Navigate to="/dashboard" replace/>;return children}
