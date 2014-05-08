if (Meteor.isClient) {

  Stories = new Meteor.Collection("stories");                                                                                                                                      
  Meteor.subscribe("stories");

  Template.stories.stories = function () {
    return Stories.find({},{sort: {name: -1}, reactive: true});
  };
}
