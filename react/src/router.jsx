import {createBrowserRouter} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Signup from './views/Signup';
import Users from './views/Users';
import Home from './views/Home';
import Protected from './components/Protected';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <Protected><Dashboard /></Protected>
    },
    {
        path: '/users',
        element: <Protected><Users /></Protected>
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;