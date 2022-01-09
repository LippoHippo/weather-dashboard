var repoContainerEl = document.querySelector ("#repos-container");
var repoSearchTerm  = document.querySelector("#repo-search-term");
var userLocationEl  = document.querySelector   ("#user-location");
var locationInputEl = document.querySelector        ("#username");

var getLocationRepos = function(timezone) {
    var apiUrl = "https//api.openweathermap.org/data/2.5/onecall?" + timezone + "&appid=";

    fetch(apiUrl)
        .then(function(response){
            if(response.ok) {
                console.log(response);
                response.json().then(function(data){
                    displayLocation(data);
                });
            } else {
                alert ("Error: Location not found. Please try again");
            }
        })
        .catch(function(error){
            alert("Unable to connect to server");
        });
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    var location = locationInputEl.value.trim();

    if(location) {
        getLocationRepos(location);

        repoContainerEl.textContent = "";
        locationInputEl.value = "";
    } else {
        alert("Please enter a location");
    }
    console.log(event);
}

userLocationEl.addEventListener("submit", formSubmitHandler);