function addItems() {
    let item = document.getElementById("itemInput").value;

    if (item.trim() === "") {
        alert("Please enter the items you forgot.");
        return;
    }

    localStorage.setItem("forgottenItems", item);

    window.location.href = "./success.html";
}
