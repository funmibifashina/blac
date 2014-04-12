/* ********************************************
input.js

This module handles user input from things like
input boxes. And such.
**********************************************/

var input = {

  domElement:  null,

  inputID:    "input",

  initialize: function(){
    console.log("Initializing Input Module.");
    this._setDomElement();
    this._addListeners();
  },

  getDomElement: function(){
    return this.domElement;
  },

  _setDomElement: function(){
    this.domElement = $(this.inputID);
  },

  _addListeners: function(){
    $(this.domElement).keypress(function(e) {
      if(e.which == 13) {
        console.log("Input.domElement detected enter key. Triggering event...");
        var text = $(this).val();
        $(this).trigger("enter", text)
      }
    });
  }

}