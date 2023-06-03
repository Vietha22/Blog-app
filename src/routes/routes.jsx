import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Settings from '../pages/settings/Settings';
import Single from '../pages/single/Single';
import Write from '../pages/write/Write';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/write', component: Write },
    { path: '/settings', component: Settings },
    { path: '/post/:postId', component: Single },
];

export { publicRoutes };
