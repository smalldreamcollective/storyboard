
Stories = new Meteor.Collection("stories");

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Meteor.publish("stories", function()
    {
      if(this.userId)
      {
        return Stories.find({},{limit: 10, sort: { name: -1}});
      }
    });
  });
  
  Meteor.methods({
    addStory: function(oStory)
    {
      var Story;

      check(oStory,{name:String});
      
      Story = {};
      Story.name = oStory.name;
      Story.uid = this.userId;

      Stories.insert(Story);
    }
    ,
    getStory: function()
    {
    }
  });
}

