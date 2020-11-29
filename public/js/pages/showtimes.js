"use strict";

// Colors
var colorWhite = '#fff';
var colorLightgray = '#f1f1f1';
var colorDarkgray = '#a0a3a7';
var colorBlack = '#000';
var colorOrange = '#f26b38';
var parser = new DOMParser(); // HTML Elements

var movieTabBtn = document.getElementById('showtimes-controller-movie');
var theaterTabBtn = document.getElementById('showtimes-controller-theater');
var mainContainer = document.getElementById('showtimes-main');
var moviesCol = document.getElementById('showtimes-col-movie');
var theatersCol = document.getElementById('showtimes-col-theater');
var showtimesCol = document.getElementById('showtimes-col-showtime');
var moviesList = document.querySelector('#showtimes-col-movie .showtimes-row-list');
var theatersList = document.querySelector('#showtimes-col-theater .showtimes-row-list');
var showtimesList = document.querySelector('#showtimes-col-showtime .showtimes-row-list');
var moviesListNoti = moviesList.firstElementChild;
var theatersListNoti = theatersList.firstElementChild;
var showtimesListNotiTheater = showtimesList.firstElementChild;
var showtimesListNotiMovie = showtimesList.lastElementChild; // Variables

var moviesData;
var theatersData;
var showtimesData;
var movieItems;
var curMovieItemIndex = 0;
var curMovieID = '';
var theaterItems;
var curTheaterItemIndex = 0;
var curTheaterID = '';
var curTheaterMovieID = ''; // Spinner

var spinnerModal = document.getElementsByClassName('spinner-modal')[0];

function enableSpinner() {
  spinnerModal.style.display = 'block';
}

function disableSpinner() {
  spinnerModal.style.display = 'none';
} // Reused functions


function addClickEventToTheaterItems(clickEvent) {
  theaterItems = document.getElementsByClassName('showtimes-row-data-theater');

  var _loop = function _loop(i) {
    theaterItems[i].addEventListener('click', function () {
      clickEvent(i);
    });
  };

  for (var i = 0; i < theaterItems.length; ++i) {
    _loop(i);
  }
}

function addClickEventToMovieItems(clickEvent) {
  movieItems = document.getElementsByClassName('showtimes-row-data-movie');

  var _loop2 = function _loop2(i) {
    movieItems[i].addEventListener('click', function () {
      clickEvent(i);
    });
  };

  for (var i = 0; i < movieItems.length; ++i) {
    _loop2(i);
  }
}

function loadSampleShowtimes(index) {
  enableSpinner();
  fetch('/showtimes/sampleData').then(function (partial) {
    partial.text().then(function (html) {
      showtimesData = parser.parseFromString(html, 'text/html');

      if (index % 2 === 0) {
        showtimesList.innerHTML = showtimesData.getElementById('showtimes-showtimes-1').innerHTML;
      } else {
        showtimesList.innerHTML = showtimesData.getElementById('showtimes-showtimes-2').innerHTML;
      }

      disableSpinner();
    });
  });
} // Theater tab


function clickMovieItemAtTheaterTab(newIndex) {
  movieItems[curMovieItemIndex].style.backgroundColor = colorWhite;
  movieItems[newIndex].style.backgroundColor = colorLightgray;
  curMovieItemIndex = newIndex;
  curMovieID = movieItems[newIndex].firstElementChild.innerHTML;
  loadSampleShowtimes(newIndex);
}

function loadMoviesByTheaterID(theaterID) {
  enableSpinner();
  fetch("/showtimes/allMovies/".concat(theaterID)).then(function (partial) {
    partial.text().then(function (html) {
      moviesData = parser.parseFromString(html, 'text/html');
      moviesList.innerHTML = moviesData.getElementById('showtimes-movies').innerHTML;
      showtimesList.innerHTML = '';
      showtimesList.appendChild(showtimesListNotiMovie);
      addClickEventToMovieItems(clickMovieItemAtTheaterTab);
      disableSpinner();
    });
  });
}

function clickTheaterItemAtTheaterTab(newIndex) {
  theaterItems[curTheaterItemIndex].style.backgroundColor = colorWhite;
  theaterItems[newIndex].style.backgroundColor = colorLightgray;
  curTheaterItemIndex = newIndex;
  curTheaterID = theaterItems[newIndex].firstElementChild.innerHTML;
  curMovieItemIndex = 0;
  loadMoviesByTheaterID(curTheaterID);
}

function loadAllTheaters() {
  enableSpinner();
  fetch('/showtimes/allTheaters').then(function (partial) {
    partial.text().then(function (html) {
      theatersData = parser.parseFromString(html, 'text/html');
      mainContainer.innerHTML = '';
      mainContainer.appendChild(theatersCol);
      mainContainer.appendChild(moviesCol);
      mainContainer.appendChild(showtimesCol);
      theatersList.innerHTML = theatersData.getElementById('showtimes-theaters').innerHTML;
      moviesList.innerHTML = '';
      moviesList.appendChild(moviesListNoti);
      showtimesList.innerHTML = '';
      showtimesList.appendChild(showtimesListNotiMovie);
      addClickEventToTheaterItems(clickTheaterItemAtTheaterTab);
      disableSpinner();
    });
  });
}

theaterTabBtn.addEventListener('click', function () {
  movieTabBtn.style.borderBottomColor = 'transparent';
  movieTabBtn.style.color = colorDarkgray;
  theaterTabBtn.style.borderBottomColor = colorOrange;
  theaterTabBtn.style.color = colorBlack;
  loadAllTheaters();
}); // Movie tab

function loadShowtimesByTheaterMovieID(theaterMovieID) {
  enableSpinner();
  fetch("/showtimes/allShowtimes/".concat(theaterMovieID)).then(function (partial) {
    partial.text().then(function (html) {
      showtimesData = parser.parseFromString(html, 'text/html');
      showtimesList.innerHTML = showtimesData.getElementById('showtimes-showtimes').innerHTML;
      disableSpinner();
    });
  });
}

function clickTheaterItemAtMovieTab(newIndex) {
  theaterItems[curTheaterItemIndex].style.backgroundColor = colorWhite;
  theaterItems[newIndex].style.backgroundColor = colorLightgray;
  curTheaterItemIndex = newIndex;
  curTheaterMovieID = theaterItems[newIndex].firstElementChild.innerHTML;
  loadShowtimesByTheaterMovieID(curTheaterMovieID);
}

function loadTheatersByMovieID(movieID) {
  enableSpinner();
  fetch("/showtimes/allTheaters/".concat(movieID)).then(function (partial) {
    partial.text().then(function (html) {
      theatersData = parser.parseFromString(html, 'text/html');
      theatersList.innerHTML = theatersData.getElementById('showtimes-theaters').innerHTML;
      showtimesList.innerHTML = '';
      showtimesList.appendChild(showtimesListNotiTheater);
      addClickEventToTheaterItems(clickTheaterItemAtMovieTab);
      disableSpinner();
    });
  });
}

function clickMovieItemAtMovieTab(newIndex) {
  movieItems[curMovieItemIndex].style.backgroundColor = colorWhite;
  movieItems[newIndex].style.backgroundColor = colorLightgray;
  curMovieItemIndex = newIndex;
  curMovieID = movieItems[newIndex].firstElementChild.innerHTML;
  curTheaterItemIndex = 0;
  loadTheatersByMovieID(curMovieID);
}

function loadAllMovies() {
  enableSpinner();
  fetch('/showtimes/allMovies').then(function (partial) {
    partial.text().then(function (html) {
      moviesData = parser.parseFromString(html, 'text/html');
      mainContainer.innerHTML = '';
      mainContainer.appendChild(moviesCol);
      mainContainer.appendChild(theatersCol);
      mainContainer.appendChild(showtimesCol);
      moviesList.innerHTML = moviesData.getElementById('showtimes-movies').innerHTML;
      theatersList.innerHTML = '';
      theatersList.appendChild(theatersListNoti);
      showtimesList.innerHTML = '';
      showtimesList.appendChild(showtimesListNotiTheater);
      addClickEventToMovieItems(clickMovieItemAtMovieTab);
      disableSpinner();
    });
  });
}

movieTabBtn.addEventListener('click', function () {
  theaterTabBtn.style.borderBottomColor = 'transparent';
  theaterTabBtn.style.color = colorDarkgray;
  movieTabBtn.style.borderBottomColor = colorOrange;
  movieTabBtn.style.color = colorBlack;
  loadAllMovies();
}); // Start here

function main() {
  loadAllMovies();
}

main();