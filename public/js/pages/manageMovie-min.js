"use strict";var movieRowElements=document.querySelectorAll("#mnmovie-table tbody tr"),tableRowElements=document.querySelectorAll("#mnmovie-table tr"),tableBodyElement=document.querySelector("#mnmovie-table tbody"),displayCheckboxElements=document.querySelectorAll("#mnmovie-display .mmnmovie-display-item input");function showTableColumn(e){tableRowElements.forEach(function(n){n.children[e].style.display="table-cell"})}function hideTableColumn(e){tableRowElements.forEach(function(n){n.children[e].style.display="none"})}function refreshDisplay(){displayCheckboxElements.forEach(function(e,n){!1===e.checked&&hideTableColumn(n+1)})}function eventDisplayCheckboxes(){displayCheckboxElements.forEach(function(e,n){e.addEventListener("click",function(){!0===e.checked?showTableColumn(n+1):hideTableColumn(n+1)})})}function handleEvents(){eventDisplayCheckboxes()}function main(){refreshDisplay(),handleEvents()}main();