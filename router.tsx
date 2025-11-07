import React from 'react';
import { createHashRouter, Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import AiSiraIcon from './components/AiSiraIcon';
import AiSiraChat from './components/AiSiraChat';


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


export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
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
]);