class Admin {

}

function createLectureHall() {
    postData("/api/createLectureHall", {
        "name": (document.getElementById("newLectureHallName") as HTMLInputElement).value,
        "combIP": (document.getElementById("newLectureHallCombIP") as HTMLInputElement).value,
        "presIP": (document.getElementById("newLectureHallPresIP") as HTMLInputElement).value,
        "camIP": (document.getElementById("newLectureHallCamIP") as HTMLInputElement).value,
    }).then(e => {
        if (e.status === 200) {
            window.location.reload()
        }
    })
}

function createUser() {
    let userName: string = (document.getElementById("name") as HTMLInputElement).value
    let email: string = (document.getElementById("email") as HTMLInputElement).value
    postData("/api/createUser", {"name": userName, "email": email, "password": null})
        .then(data => {
            if (data.status === 200) {
                showMessage("User was created successfully. Reload to see them.")
            } else {
                showMessage("There was an error creating the user: " + data.body)
            }
        })
}

function deleteUser(id: number) {
    if (confirm("Confirm deleting user.")) {
        postData("api/deleteUser", {"id": id})
            .then(data => {
                    if (data.status === 200) {
                        showMessage("User was deleted successfully.")
                        const row = document.getElementById("user" + id)
                        row.parentElement.removeChild(row)
                    } else {
                        showMessage("There was an error deleting the user: " + data.body)
                    }
                }
            )
    }
}
