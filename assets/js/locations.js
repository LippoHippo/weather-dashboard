var repoContainerEl = document.querySelector ("#repos-container");
var repoSearchTerm  = document.querySelector("#repo-search-term");
var userLocationEl  = document.querySelector   ("#user-location");
var locationInputEl = document.querySelector        ("#username");
var dailyForecastEl = document.querySelector  ("#daily-forecast");


/* Creates a button with api call has issue creating blank button */
createLocation = function(event) {
    event.preventDefault();
    var location = locationInputEl.value.trim();
    locationInputEl.value = "";

    var locationEl = document.createElement("button");
    locationEl.classList = "list-group-item list-group-item-action active align-center btn btn-primary m-2 p-6 rounded"

    locationEl.innerHTML = location;
    
    repoContainerEl.appendChild(locationEl)
}








userLocationEl.addEventListener("submit", createLocation);