import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes';

// components lazy loading
const Dashboard = React.lazy(() => import('../Admin/Dashboard'));
const Login = React.lazy(() => import('../Common/Login'));
const Home = React.lazy(() => import('../Ecommerce/Home'));
    

function AppRoute() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route element={<ProtectedRoutes />} >
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Suspense>
  )
}

export default AppRoute