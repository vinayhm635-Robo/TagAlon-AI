function addItems() {

    let item = document.getElementById("itemInput").value;

    if (item === "") {
        alert("Please enter the items you forgot.");
    } else {

        localStorage.setItem("forgottenItems", item);

        window.location.href = "success.html";
    }
}
