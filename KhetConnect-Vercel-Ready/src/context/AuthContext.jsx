import { createContext, useContext, useEffect, useState } from 'react';
import { DEMO_ADMIN, demoLogin, syncFromBackend } from '../data/demoStore';
const AuthContext=createContext(null);
export function AuthProvider({children}){
 const [user,setUser]=useState(()=>{try{const x=localStorage.getItem('kc_user');return x?JSON.parse(x):null}catch{return null}});
 useEffect(()=>{ syncFromBackend(); },[]);
 const login=(u)=>{localStorage.setItem('kc_token',u.token||'demo');localStorage.setItem('kc_user',JSON.stringify(u));setUser(u)};
 const loginDemo=(role)=>login(role==='ADMIN'?DEMO_ADMIN:demoLogin(role));
 const logout=()=>{localStorage.removeItem('kc_token');localStorage.removeItem('kc_user');setUser(null)};
 const updateKycStatus=(status)=>{const u={...user,kycStatus:status};localStorage.setItem('kc_user',JSON.stringify(u));setUser(u)};
 return <AuthContext.Provider value={{user,login,loginDemo,logout,updateKycStatus}}>{children}</AuthContext.Provider>
}
export const useAuth=()=>useContext(AuthContext);
