document.getElementById("emailForm").addEventListener("submit",
    function (event){
        event.preventDefault();
        const email = document.getElementById("email").value;
        const errMsg = document.getElementById("error-message");
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(pattern.test(email)){
            errMsg.style.display= "none";
            alert("Email is valid! Form submitted.");
            // document.getElementById("emailForm").reset();
        }else{
            errMsg.style.display= "block";
            errMsg.textContent = "Please enter a valid email address.";

        }
        document.getElementById("emailForm").reset();
    }
)