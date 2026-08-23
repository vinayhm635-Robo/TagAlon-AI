function addItems() {
    let item = document.getElementById("itemInput").value;

    if (item === "") {
        alert("Please enter the items you forgot.");
    } else {
        alert("You want to add: " + item);
    }
}
