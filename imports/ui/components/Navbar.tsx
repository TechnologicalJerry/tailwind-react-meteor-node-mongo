import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Meteor.logout(() => {
      navigate('/login');
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="flex h-16 items-center px-6">
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};
