let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.dir(form);

    let user = this.elements[0]; //document.querySelector("#user");
    let pass = this.elements[1]; //document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

