  //ROUTES
  Router.route('/', function() {
    this.render('welcome');
  });

  Router.route('/session', function() {
    this.render('session')
  })


  if (Meteor.isClient) {

//Model
  //Snippets
    function Snippet(url, title){
      this.url = url;
      this.title = title;
      this.cueIn = 0;
      this.cueOut = 0
    }

    Snippet.prototype.set_cue_in = function(cue_in_time){
      this.cue_in = cue_in_time;
    };

    Snippet.prototype.set_cue_out = function(cue_out_time){
      this.cue_out = cue_out_time;
    };


//Controller
    var SnippetController = (function(){
      var createNewSnippet = function(url){
        var snippet = new Audio([url])
      }

      return {
        createNewSnippet: createNewSnippet
      }
    })();

//VIIIEEWWWWS?
    $(document).ready(function(){
      var $streams = $('audio')
      var initialStream = $streams[0];
      var nextStream = $streams[1];

      $("#new_snippet").on('submit', function(event){
        event.preventDefault();

      })

      $("#play_all").on('click', function(event){
        event.preventDefault();
        var $streams = $('audio')
        $streams.each(function(index, el){
          el.play();
        })
      })

      $("#pause_all").on('click', function(event){
        event.preventDefault();
        var $streams = $('audio')
        $streams.each(function(index, el){
          el.pause();
        })
      })


    });


  }

  if (Meteor.isServer) {
    Meteor.startup(function () {
    // code to run on server at startup
  });
  }
