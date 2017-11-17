// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [
    {name: 'aquaman', img: 'aquaman.jpg'},
    {name: 'batman', img: 'batman.jpg'},
    {name: 'captain america', img: 'captain-america.jpg'},
    {name: 'fantastic four', img: 'fantastic-four.jpg'},
    {name: 'flash', img: 'flash.jpg'},
    {name: 'green arrow', img: 'green-arrow.jpg'},
    {name: 'green lantern', img: 'green-lantern.jpg'},
    {name: 'ironman', img: 'ironman.jpg'},
    {name: 'spiderman', img: 'spiderman.jpg'},
    {name: 'superman', img: 'superman.jpg'},
    {name: 'the avengers', img: 'the-avengers.jpg'},
    {name: 'thor', img: 'thor.jpg'},
    {name: 'aquaman', img: 'aquaman.jpg'},
    {name: 'batman', img: 'batman.jpg'},
    {name: 'captain america', img: 'captain-america.jpg'},
    {name: 'fantastic four', img: 'fantastic-four.jpg'},
    {name: 'flash', img: 'flash.jpg'},
    {name: 'green arrow', img: 'green-arrow.jpg'},
    {name: 'green lantern', img: 'green-lantern.jpg'},
    {name: 'ironman', img: 'ironman.jpg'},
    {name: 'spiderman', img: 'spiderman.jpg'},
    {name: 'superman', img: 'superman.jpg'},
    {name: 'the avengers', img: 'the-avengers.jpg'},
    {name: 'thor', img: 'thor.jpg'}
  ];
  this.selectedCards = [];
  this.pairsClicked = 0;
  this.correctPairs = 0;

  this.selectCard = function(card) {
    if (this.selectedCards.length) {
      if (card === this.selectedCards[0]) {
        this.selectedCards = [];
        console.log('ok');
      } else {
        console.log('wrong Guess');
        this.selectedCards = [];
      }
    } else {
      console.log('added');
      this.pairsClicked++;
      this.selectedCards.push(card);
    }
  };
};

// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

$(document).ready(function() {
  var memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html +=
      '<div class= "card" style="float: left;" name="card_' +
      sanitizedName +
      '">';
    html += '<div class="back" style="transition:1s"';
    html += '    name="' + pic.name + '">' + pic.name;
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(img/' + pic.img + ') no-repeat"';
    html += '    name="' + pic.name + '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;

  // Game logic

  $('.card').click(function() {
    var cardName = $(this).attr('name');
    memoryGame.selectCard(cardName);
    $('#pairs_clicked').text(memoryGame.pairsClicked);
    $(this)
      .children('.back')
      .css({
        transform: 'rotateY(90deg)',
        background: '#000'
      });
  });
});
