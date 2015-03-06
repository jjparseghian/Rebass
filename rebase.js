Snippets = new Mongo.Collection('Snippets')



//MODELS

    //SNIPPET

    //js things to note for functions
      //currentTime = start differential of the snippet relative to it's own zero
        //use for ST and END


      // $('#audio').bind('canplay', function() {
      //   this.currentTime = 29; // jumps to 29th secs
      // });

  //CONTROLLER


if (Meteor.isClient) {

  Template.body.helpers({

  });

  Template.body.events({

    "submit #start_time" : function(event){

      var new_start = event.target;

    }
  });


      function Snippet(url, title){
        this.url = url;
        this.title = title;
        this.cueIn = 0;
        this.cueOut = 0;
        this.start_time = 0;
        this.end_time = 0;
      }

      Snippet.prototype.set_start = function(start_time){
        this.start_time = start_time;
      };

      Snippet.prototype.set_end = function(end_time){
        this.end_time = end_time;
      };

      Snippet.prototype.set_cue_in = function(cue_in_time){
        this.cue_in = cue_in_time;
      };

      Snippet.prototype.set_cue_out = function(cue_out_time){
        this.cue_out = cue_out_time;
      };




}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
