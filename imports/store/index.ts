import { create } from 'zustand';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

interface AuthState {
  user: Meteor.User | null;
  isLoading: boolean;
  setUser: (user: Meteor.User | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
}));

// Sync Meteor Auth with Zustand
Tracker.autorun(() => {
  const user = Meteor.user();
  const loggingIn = Meteor.loggingIn();
  
  useAuthStore.getState().setUser(user || null);
  useAuthStore.getState().setLoading(loggingIn);
});
