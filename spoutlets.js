if (Meteor.isClient) {
    
/**
  Meteor.loginWithPassword = function(user, password, function() {
      console.log('done');
  });


  Meteor.loginWithGithub({
    requestPermissions: ['user', 'public_repo']
  }, function (err) {
      console.log('callback');
    if (err)
      Session.set('errorMessage', err.reason || 'Unknown error');
    else
      console.log('GitHub success');
  });
*/

  if (Meteor.user()) {
    
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log('server starting');
  });
}
