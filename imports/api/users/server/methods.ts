import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  async 'users.updateProfile'(name: string) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Meteor.users.update(this.userId, {
      $set: {
        'profile.name': name,
      },
    });
  },
});

// Configure Accounts
Accounts.config({
  forbidClientAccountCreation: false,
});
