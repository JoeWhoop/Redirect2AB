document.getElementById("goButton").addEventListener("click", function () {
    var selectedLine = document.getElementById("Linia").value;

    var redirectionURLs = {
        "A": "https://joewhoop.github.io/qrkodyy/",
        "D": "https://joewhoop.github.io/qrkodyy/", // Replace with the desired URL for D
    };

    if (redirectionURLs[selectedLine]) {
        window.location.href = redirectionURLs[selectedLine];
    } else {
        alert("Wybierz linie.");
    }
});
