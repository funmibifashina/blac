//player - who is currently on the screen
//direction - left, right, front, back
//what are the arms doing - left/right
//position - where player is on screen
//animation - what animation is currently happening


var character = {

    initialize: function (attr) {
        var view = this;

        $.each(attr, function (key, index) {
            console.log(key, index);

            player = (index.player) ? index.player : false;
            //conditional statement if no player has been declared
            if (!player) return;

            gender = (index.gender) ? index.gender : 'male';
            skinTone = (index.skinTone) ? index.skinTone : '#fff';
            headHeight = (index.headHeight) ? index.headHeight : 100;
            headWidth = (index.headWidth) ? index.headWidth : 100;
            animateHead = (index.animateHead) 
                ? index.animateHead 
                : 'bounce';
            animateBody = (index.animateBody) 
                ? index.animateBody 
                : 'bounce';
            direction = 'front';

            //gobal
            view._main = $('#' + player);
            view._hair = $('#' + player + ' > .hair');
            view._brain = $('#' + player + ' > .brain');
            view._face = $('#' + player + ' > .face');
            view._bod = $('#' + player + '> .bod');
            view._arms = $('#' + player + '> .arms');
            view._legs = $('#' + player + '> .legs');

            view.main(direction);
            view.brain(skinTone, headHeight, headWidth, animateHead);
            view.body(gender, direction, animateBody);
            view.arms();
            view.legs();
            view.position();
            view.animation();
        });
    },

    main: function (direction) {

    },

    hair: function () {

    },

    brain: function (skinTone, height, width, animation) {
        this._brain.css({
            'background': skinTone,
                'height': height + 'px',
                'width': width + 'px'
        });

    },

    body: function (gender, direction, animation) {
        //inherit direction - animation
        this.arms(direction);
        this.animation(animation);
    },

    arms: function () {
        //direction
        this._arms;
    },

    legs: function () {

    },

    position: function () {

    },

    animation: function (animation) {

    }
};

var buildCharFrame = {
    createChar: function (playerName) {
        var template = "<div id=" + playerName + " class='character'>" +
            "<div class='hair animated infinite bounce'></div>" +
            "<div class='brain animated infinite bounce'>" +
            "<div class='face'>" +
            "<div class='eyes'>^   ^<br> _____</div>" +
            "<div class='mouth'></div>" +
            "</div>" +
            "<div class='hair-overlay'>" +
            "<div class='left'>" +
            "<div class='half'></div>" +
            "</div>" +
            "<div class='right'>" +
            "<div class='half'></div>" +
            "</div>" +
            "<div class='left-down'></div>" +
            "<div class='right-down'></div>" +
            "</div>" +
            "</div>" +

            "<div class='bod animated infinite pulse'>" +
            "<div class='arms'>" +
            "<div class='right'></div>" +
            "<div class='left'></div>" +
            "</div>" +
            "</div>" +

            "<div class='legs'>" +
            "<div class='right'></div>" +
            "<div class='left'></div>" +
            "</div>" +
            "</div>";

        $('body').append(template);
    }
};

$(document).ready(function () {

    //character names
    var charNames = new Array('funmibi', 'shavanthi'),
        charAttr = null;

    //build a character template
    $.each(charNames, function (key, index) {

        buildCharFrame.createChar(index);
        charAttr = {
            funmibi: {
                'player': 'funmibi',
                    'gender': 'female',
                    'skinTone': '#452D00',
                    'headHeight': 100,
                    'headWidth': 100,
                    'animatedHead': 'bounce',
                    'aimatedBody': 'bounce'
            },
            shivanthi: {
                'player': 'shavanthi',
                    'gender': 'female',
                    'skinTone': '#4A330A',
                    'headHeight': 110,
                    'headWidth': 100,
                    'animatedHead': 'bounce',
                    'aimatedBody': 'bounce'
            }
        };
    });

    //controls for the characters
    /*player, gender, headHeight, headWidth, bodyHeight, bodyWidth, armsHeight, legsHeight, positionX, positionY, animateHead, animateBody, direction*/



    //pass character attributes
    character.initialize(charAttr);
});