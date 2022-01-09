/* Global varibles used for both js files */
var repoContainerEl = document.querySelector ("#repos-container");
var repoSearchTerm  = document.querySelector("#repo-search-term");
var userLocationEl  = document.querySelector   ("#user-location");
var locationInputEl = document.querySelector        ("#username");
var dailyForecastEl = document.querySelector  ("#daily-forecast");


/* Tried to save locations that were made from username  could not get it to work*/
var myLocations = {};

var loadLocations = function() {
    myLocations = JSON.parse(localStorage.getItem("myLocations"));

    if(!myLocations){
        myLocations = {
            place: []
        };
    }

    $.each(myLocations, function(list, arr){
        arr.forEach(function(theLocation){
            createLocation(theLocation.text, list);
        });
    });
};

var saveLocations = function() {
    localStorage.setItem("myLocations", JSON.stringify(myLocations));
};

$("#user-location").click(function(){
    var newLocation = $("#username").val();
        if(newLocation){
            createLocation(newLocation, "place");

            myLocations.place.push({
                place: newLocation
            });
            saveLocations();
        }
});


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