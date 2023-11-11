document.getElementById("goButton").addEventListener("click", function () {
    var selectedMechanic = document.getElementById("mechanicDropdown").value;
    var selectedStation = document.getElementById("stationDropdown").value;

    selectedMechanic = selectedMechanic.toUpperCase().replace(" ", "_");
    selectedStation = selectedStation.toUpperCase().replace(" ", "_");

    var redirectionURLs = {
        "A": "https://joewhoop.github.io/qrkodyy/",
        "D": "https://web.miniextensions.com/c9PrY0xXNNhsDJQQeLCL?preffill_Mechanic=" + selectedMechanic + "&prefill_Station=" + selectedStation,
    };

    if (redirectionURLs[selectedStation]) {
        window.location.href = redirectionURLs[selectedStation];
    } else {
        alert("Wybierz linie.");
    }
});
