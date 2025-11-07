import React from 'react';
import { createHashRouter, Outlet, ScrollRestoration, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import AiSiraIcon from './components/AiSiraIcon';
import AiSiraChat from './components/AiSiraChat';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return <div className="h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!currentUser) {
        return <Navigate to="/admin/login" replace />;
    }

    return <>{children}</>;
};

const Layout = () => {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [initialQuery, setInitialQuery] = React.useState('');

  const handleOpenChat = (query?: string) => {
    if (query && typeof query === 'string') {
      setInitialQuery(query);
    } else {
      setInitialQuery('');
    }
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setInitialQuery('');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark font-sans transition-colors duration-300">
        <ScrollRestoration />
        <Header />
        <main>
            <Outlet context={{ handleOpenChat }} />
        </main>
        <Footer />
        <div className="fixed bottom-8 right-8 z-40">
            <AiSiraIcon onClick={() => handleOpenChat()} />
        </div>
        <AiSiraChat isOpen={isChatOpen} onClose={handleCloseChat} initialQuery={initialQuery} />
    </div>
  );
};

// Fix: Wrap route elements in components to avoid potential parsing issues with complex inline JSX.
const AppLayout = () => (
    <AuthProvider>
        <Layout />
    </AuthProvider>
);

const AdminLoginElement = () => (
    <AuthProvider>
        <AdminLoginPage />
    </AuthProvider>
);

const AdminDashboardElement = () => (
    <AuthProvider>
        <ProtectedRoute>
            <AdminDashboardPage />
        </ProtectedRoute>
    </AuthProvider>
);

export const router = createHashRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'guru',
        element: <TeachersPage />,
      }
    ],
  },
  {
    path: '/admin/login',
    element: <AdminLoginElement />,
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboardElement />,
  }
]);