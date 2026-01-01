import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { UserProvider } from './contexts/UserContext.jsx';
import { EventProvider } from './contexts/EventContext.jsx';
import Header from './components/Header.jsx';
import Register from './components/Register.jsx';
import LoginForm from './components/LoginForm.jsx';
import Dashboard from './components/Dashboard.jsx';
import AddEvent from './components/AddEvent.jsx';
import Help from './components/Help.jsx';
import { Navigate } from 'react-router-dom';
import { useUser } from './contexts/UserContext.jsx';

function PrivateRoute({ children }) {
  const { user } = useUser();

  return user ? children : <Navigate to="/login" />;
}

function App() {

  return (
    <UserProvider>
      <EventProvider>
        <Router>
          <Header />

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/add-event" element={<PrivateRoute><AddEvent /></PrivateRoute>} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Router>
      </EventProvider>
    </UserProvider>
  );
}

export default App;