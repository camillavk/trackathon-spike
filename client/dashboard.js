if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    },

    // nowTime: new Date().getTime(),

    getNowTime: function () {
      var time = new Date().getTime();
      var humanTime = new Date(time)
      return humanTime.getUTCHours()+" hours, "+humanTime.getUTCMinutes()+" minutes and "+humanTime.getUTCSeconds()+" second(s)";

      // return time.toString();

    },



  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
  
  Meteor.methods({

   
  });
