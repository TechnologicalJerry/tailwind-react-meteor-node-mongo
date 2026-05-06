import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Settings, Users } from 'lucide-react';
import { cn } from './ui/Button';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/users', label: 'Users', icon: Users },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden w-64 flex-col border-r border-gray-200 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-900/50 md:flex">
      <div className="flex h-16 items-center px-6 font-semibold tracking-tight text-lg border-b border-gray-200 dark:border-gray-800">
        <span className="bg-gradient-to-r from-primary-500 to-indigo-500 bg-clip-text text-transparent">
          MeteorSaaS
        </span>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary-100 text-primary-900 dark:bg-primary-900/50 dark:text-primary-100"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
