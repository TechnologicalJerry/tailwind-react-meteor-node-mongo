import { Meteor } from 'meteor/meteor';
import '/imports/api/users/server/methods';
import '/imports/api/users/server/publications';

Meteor.startup(async () => {
  console.log('Server started successfully');
});
