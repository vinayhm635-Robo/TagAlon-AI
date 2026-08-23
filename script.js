document.getElementById("addButton").addEventListener("click", function () {

    let item = document.getElementById("itemInput").value;

    if (item.trim() === "") {
        alert("Please enter the item you forgot.");
        return;
    }

    localStorage.setItem("forgottenItems", item);

    window.location.href = "processing.html";

});
