/*
File: script.js
GUI Assignment: Homework #5
Daniel Quinonez, UMass Lowell Computer Science, daniel_quinonezrosario@student.uml.edu
Copyright (c) 2022 by Daniel. All rights reserved. May be freely copied or excerpted for educational purposes
with credit to the author.
Updated by DQ on December 20th, 2022
*/

// This array was copied from file: /~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
// I attached the image of each tile to the corresponding index
var scrabbleTiles = [] ;
scrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/Scrabble_Tiles/Scrabble_Tile_A.jpg"  } ;
scrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_B.jpg"  } ;
scrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_C.jpg"  } ;
scrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_D.jpg"  } ;
scrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image" : "img/Scrabble_Tiles/Scrabble_Tile_E.jpg"  } ;
scrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_F.jpg"  } ;
scrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "img/Scrabble_Tiles/Scrabble_Tile_G.jpg"  } ;
scrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_H.jpg"  } ;
scrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/Scrabble_Tiles/Scrabble_Tile_I.jpg"  } ;
scrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_J.jpg"  } ;
scrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_K.jpg"  } ;
scrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_L.jpg"  } ;
scrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_M.jpg"  } ;
scrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tiles/Scrabble_Tile_N.jpg"  } ;
scrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "img/Scrabble_Tiles/Scrabble_Tile_O.jpg"  } ;
scrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_P.jpg"  } ;
scrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Q.jpg"  } ;
scrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tiles/Scrabble_Tile_R.jpg"  } ;
scrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_S.jpg"  } ;
scrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tiles/Scrabble_Tile_T.jpg"  } ;
scrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_U.jpg"  } ;
scrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_V.jpg"  } ;
scrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_W.jpg"  } ;
scrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_X.jpg"  } ;
scrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Y.jpg"  } ;
scrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Z.jpg"  } ;
scrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"  } ;

var scrabbleLetters = [];
scrabbleLetters[0] = "A";
scrabbleLetters[1] = "B";
scrabbleLetters[2] = "C";
scrabbleLetters[3] = "D";
scrabbleLetters[4] = "E";
scrabbleLetters[5] = "F";
scrabbleLetters[6] = "G";
scrabbleLetters[7] = "H";
scrabbleLetters[8] = "I";
scrabbleLetters[9] = "J";
scrabbleLetters[10] = "K";
scrabbleLetters[11] = "L";
scrabbleLetters[12] = "M";
scrabbleLetters[13] = "N";
scrabbleLetters[14] = "O";
scrabbleLetters[15] = "P";
scrabbleLetters[16] = "Q";
scrabbleLetters[17] = "R";
scrabbleLetters[18] = "S";
scrabbleLetters[19] = "T";
scrabbleLetters[20] = "U";
scrabbleLetters[21] = "V";
scrabbleLetters[22] = "W";
scrabbleLetters[23] = "X";
scrabbleLetters[24] = "Y";
scrabbleLetters[25] = "Z";
scrabbleLetters[26] = "_";

var scrabbleBoard = {};

// this array represent one row
// The board images were downloaded from 
// https://iconarchive.com/show/bag-o-tiles-icons-by-barkerbaggies/Blank-icon.html
// https://imgflip.com/memetemplate/174061081/Double-word-score-scrabble
scrabbleBoard.slots = [];
scrabbleBoard.slots[0] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/Scrabble_BoardLine/Scrabble_BlankSquare.png"};
scrabbleBoard.slots[1] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "img/Scrabble_BoardLine/Scrabble_DoubleWordScore.png"};
scrabbleBoard.slots[2] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/Scrabble_BoardLine/Scrabble_BlankSquare.png"};
scrabbleBoard.slots[3] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/Scrabble_BoardLine/Scrabble_BlankSquare.png"};
scrabbleBoard.slots[4] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/Scrabble_BoardLine/Scrabble_BlankSquare.png"};
scrabbleBoard.slots[5] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "img/Scrabble_BoardLine/Scrabble_DoubleWordScore.png"};
scrabbleBoard.slots[6] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/Scrabble_BoardLine/Scrabble_BlankSquare.png"};

scrabbleBoard.slot_counter = Object.keys(scrabbleBoard.slots).length;

// Construct the board
$(function() {
    var slot;

    // insert slot image for 7 slots
    for(slot = 0; slot < scrabbleBoard.slot_counter; slot++) {
        $("#scrabble_board").append('<img src="' + scrabbleBoard.slots[slot].image + '" id="board_slot"/>' );
    }
    $("#board_slot").droppable();
})

// Generate random tiles for hand, test out the drag and drop feature
$(function() {
    var tiles;

    $("#letter_rack").append('<img src="img/scrabble-tile-holder.png" />');
    // generate 7 random tiles for the player's hand
    for(tiles = 0; tiles < 7; tiles++) {
        // random number generation method was found here https://www.w3schools.com/js/js_random.asp
        $("#letter_rack").append('<img src="' + scrabbleTiles[scrabbleLetters[Math.floor(Math.random() * 10)]].image + '" class="tile"/>');
    }
    $(".tile").draggable();

})

// This function takes care of regenerating a new hand every time the user presses the start over button
restart = function() {
    var tiles;

    // clear the HTML for when you decide to restart
    const my_tiles = document.getElementById("letter_rack");
    my_tiles.innerHTML = '';

    $("#letter_rack").append('<img src="img/scrabble-tile-holder.png" />');
    // generate 7 random tiles for the player's hand
    for(tiles = 0; tiles < 7; tiles++) {
        // random number generation method was found here https://www.w3schools.com/js/js_random.asp
        $("#letter_rack").append('<img src="' + scrabbleTiles[scrabbleLetters[Math.floor(Math.random() * 10)]].image + '" class="tile"/>');
    }
    $(".tile").draggable();

}

