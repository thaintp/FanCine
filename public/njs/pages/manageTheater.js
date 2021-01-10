// ===== HTML elements =====
const theaterRowElements = document.querySelectorAll('#mntheater-table tbody tr');
const tableRowElements = document.querySelectorAll('#mntheater-table tr');
const tableBodyElement = document.querySelector('#mntheater-table tbody');
const displayCheckboxElements = document.querySelectorAll(
  '#mntheater-display .mmntheater-display-item input',
);

// Global variables
const COL = Object.freeze({
  NAME: 1,
  CITY: 2,
  ADDRESS: 3,
  PHONE: 4,
  ROOMS: 5,
  ID: 6,

});

// ===== Functions =====
function showTableColumn(colIndex) {
  tableRowElements.forEach((e) => {
    e.children[colIndex].style.display = 'table-cell';
  });
}

function hideTableColumn(colIndex) {
  tableRowElements.forEach((e) => {
    e.children[colIndex].style.display = 'none';
  });
}

function refreshDisplay() {
  displayCheckboxElements.forEach((e, i) => {
    if (e.checked === false) {
      hideTableColumn(i + 1);
    }
  });
}

// ===== Events =====
function eventDisplayCheckboxes() {
  displayCheckboxElements.forEach((e, i) => {
    e.addEventListener('click', () => {
      if (e.checked === true) {
        showTableColumn(i + 1);
      } else {
        hideTableColumn(i + 1);
      }
    });
  });
}

function eventRowTheaters() {
  theaterRowElements.forEach((row) => {
    row.addEventListener('click', () => {
      const _id = row.children[COL.ID].innerHTML;
      fetch(`/api/theaters/${_id}`).then((res) => {
        res.json().then((data) => {
          $('.nameField').html(data.name);
          $('.cityField').html(data.city);
          $('.addressField').html(data.address);
          $('.phoneField').html(data.phone);
          $('.roomField').html(data.rooms);
          $('#myModal').modal('show');
        });
      });
    });
  });
}

function handleEvents() {
  eventDisplayCheckboxes();
  eventRowTheaters();
}

// $('#close').click(() => {
//   $('#myModal').removeClass('show');
//   $('#myModal').modal('hide');
//   console.log($('#myModal').modal());
// });

// ===== Main =====
function main() {
  refreshDisplay();
  handleEvents();
}

main();
