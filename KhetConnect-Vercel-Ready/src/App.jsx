import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing'; import Login from './pages/Login'; import Register from './pages/Register';
import Dashboard from './pages/Dashboard'; import Marketplace from './pages/Marketplace'; import Orders from './pages/Orders'; import OrderDetail from './pages/OrderDetail';
import Profile from './pages/Profile'; import TrustProfile from './pages/TrustProfile'; import ListCrop from './pages/ListCrop'; import AvailableLoads from './pages/AvailableLoads'; import IncomingRequests from './pages/IncomingRequests';
import AdminDashboard from './pages/AdminDashboard'; import DemandInsights from './pages/DemandInsights'; import CostEstimator from './pages/CostEstimator'; import PriceTrends from './pages/PriceTrends'; import RegionalStats from './pages/RegionalStats'; import DemandMap from './pages/DemandMap'; import FindTruck from './pages/FindTruck'; import TrackDelivery from './pages/TrackDelivery'; import WhereToSell from './pages/WhereToSell';
import './styles/theme.css';
import {LanguageProvider} from './context/LanguageContext';
export default function App(){return <LanguageProvider><AuthProvider><BrowserRouter><Routes>
 <Route path="/" element={<Landing/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/>
 <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/><Route path="/marketplace" element={<ProtectedRoute><Marketplace/></ProtectedRoute>}/><Route path="/orders" element={<ProtectedRoute><Orders/></ProtectedRoute>}/><Route path="/orders/:id" element={<ProtectedRoute><OrderDetail/></ProtectedRoute>}/><Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/><Route path="/trust-profile/:userId" element={<ProtectedRoute><TrustProfile/></ProtectedRoute>}/>
 <Route path="/list-crop" element={<ProtectedRoute><ListCrop/></ProtectedRoute>}/><Route path="/available-loads" element={<ProtectedRoute><AvailableLoads/></ProtectedRoute>}/><Route path="/incoming-requests" element={<ProtectedRoute><IncomingRequests/></ProtectedRoute>}/>
 <Route path="/demand-insights" element={<ProtectedRoute><DemandInsights/></ProtectedRoute>}/><Route path="/cost-estimator" element={<ProtectedRoute><CostEstimator/></ProtectedRoute>}/><Route path="/price-trends" element={<ProtectedRoute><PriceTrends/></ProtectedRoute>}/><Route path="/regional-stats" element={<ProtectedRoute><RegionalStats/></ProtectedRoute>}/><Route path="/demand-map" element={<ProtectedRoute><DemandMap/></ProtectedRoute>}/><Route path="/find-truck" element={<ProtectedRoute><FindTruck/></ProtectedRoute>}/><Route path="/track-delivery" element={<ProtectedRoute><TrackDelivery/></ProtectedRoute>}/><Route path="/where-to-sell" element={<ProtectedRoute><WhereToSell/></ProtectedRoute>}/>
 <Route path="/admin" element={<ProtectedRoute requireAdmin><AdminDashboard/></ProtectedRoute>}/>
 <Route path="*" element={<Navigate to="/" replace/>}/>
 </Routes></BrowserRouter></AuthProvider></LanguageProvider>}
