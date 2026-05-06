import { Meteor } from 'meteor/meteor';

// Custom User Type Definition
export interface UserProfile {
  name: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

export interface User extends Meteor.User {
  profile: UserProfile;
}

export const Users = Meteor.users;
