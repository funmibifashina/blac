/* ********************************************
app.js

This module handles all teh application logics.
**********************************************/

var app = {

  inputDomElement: null,

  inputID: "input",
  frameID: "frame",

  player: {
    name: null,
    avatar: null
  },

  defaultAvatar: {
    hair: {
      background: "#000",
      _centered: true,
      _classes: "animated infinite bounce",
      height: 170,
      width: 110
    },
    head: {
      background: "brown",
      _centered: true,
      _classes: "animated infinite bounce",
      "margin-top": 10,
      height: 90,
      width: 90,
      "z-index": 6
    },
    body: {
      _classes: "animated infinite pulse",
      _centered: true,
      background: "red",
      "margin-top": 90,
      height: 100,
      width: 50,
      position: "relative",
      "z-index": 1
    }
  },

  centeredStyle: { 
    position: "absolute",
    left: "50%"
  },

  initialize: function(){
    console.log("Initializing App Module.");
    // Get the input box's DOM element. Used for retrieving player name.
    this.inputDomElement = input.getDomElement();
    // Set event handler. Triggered by typing "enter" in the input box.
    $(this.inputDomElement).on("enter", function(evt, string){
      app.player.name = string;
      console.log("Player Name: ", app.player.name);
    } );
    this.player.avatar = this.defaultAvatar;
    this.drawAvatar();
  },

  drawAvatar: function(){
    console.log("Drawing avatar");
    var avatar = this.player.avatar;
    for( var bodyPartName in avatar ){
      var bodyPart = avatar[bodyPartName];
      var bodyPartElement = "<div id='" + bodyPartName + "'" + " class='" + bodyPart._classes + "'>";
      $(bodyPartElement).appendTo(".frame").css(bodyPart);
      if(bodyPart._centered){
        this.centerBodyPart(bodyPartName)
      }
    }
  },

  centerBodyPart: function(bodyPartName){
    console.log("Centering", bodyPartName);
    var bodyPart = this.player.avatar[bodyPartName];

    $("#" + bodyPartName).css(this.centeredStyle);
    var marginLeft = -1*(bodyPart.width/2);
    $("#" + bodyPartName).css("margin-left", marginLeft);
  }
}