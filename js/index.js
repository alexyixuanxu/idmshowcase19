var Shuffle = window.Shuffle;
var element = document.querySelector('.my-shuffle-container');
var sizer = element.querySelector('.my-sizer-element');
var main = document.querySelector('main');

// main.

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.grid__brick',
  sizer: sizer, // could also be a selector: '.my-sizer-element'
  initialSort: null
});
// shuffleInstance.filter('animal');
$("#all").on("click", function(){
   shuffleInstance.filter();
});
$("#btn-print").on("click", function(){
   shuffleInstance.filter('Print');
});
$("#btn-installation").on("click", function(){
   shuffleInstance.filter('Installation');
});
$("#btn-VRAR").on("click", function(){
   shuffleInstance.filter('VR/AR/MR');
});
$("#btn-ID").on("click", function(){
   shuffleInstance.filter('Interactive Design');
});
$("#btn-Perf").on("click", function(){
   shuffleInstance.filter('Performance');
});
$("#btn-UX").on("click", function(){
   shuffleInstance.filter('UX/UI/App');
});
$("#btn-Oth").on("click", function(){
   shuffleInstance.filter('Other');
});
$("#random").on("click", function() {
  shuffleInstance.sort({randomize:true})
});
// setTimeout(function() {shuffleInstance.sort({randomize:true})}, 1000)
// setTimeout(function() {shuffleInstance.sort({randomize:false})}, 1500)




var Demo = function (element) {
  this.element = element;

  this.shuffle = new Shuffle(element, {
    itemSelector: '.grid__brick',
    sizer: element.querySelector('.my-sizer-element'),
  });

  // Log events.
  // this.addShuffleEventListeners();
  //
  // this._activeFilters = [];
  //
  // this.addFilterButtons();
  // this.addSorting();
  this.addSearchFilter();

  this.mode = 'exclusive';
};




// Advanced filtering
Demo.prototype.addSearchFilter = function () {
  var searchInput = document.querySelector('.js-shuffle-search');

  if (!searchInput) {
    return;
  }

  searchInput.addEventListener('keyup', this._handleSearchKeyup.bind(this));
};

/**
 * Filter the shuffle instance by items with a title that matches the search input.
 * @param {Event} evt Event object.
 */
Demo.prototype._handleSearchKeyup = function (evt) {
  var searchText = evt.target.value.toLowerCase();

  this.shuffle.filter(function (element, shuffle) {

    // If there is a current filter applied, ignore elements that don't match it.
    if (shuffle.group !== Shuffle.ALL_ITEMS) {
      // Get the item's groups.
      var groups = JSON.parse(element.getAttribute('data-groups'));
      var isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;

      // Only search elements in the current group
      if (!isElementInCurrentGroup) {
        return false;
      }
    }

    var titleElement = element.querySelector('.card-body');
    var titleText = titleElement.textContent.toLowerCase().trim();

    return titleText.indexOf(searchText) !== -1;
  });
};

document.addEventListener('DOMContentLoaded', function () {
  window.demo = new Demo(document.getElementById('grid'));
});
