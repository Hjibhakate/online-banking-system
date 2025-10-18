// function toggleModal(modalId) {
//     const modal = document.getElementById(modalId);
//     if (modal.style.display === "none" || !modal.style.display) {
//         modal.style.display = "block";
//     } else {
//         modal.style.display = "none";
//     }
// }



// function loginUser(email, password) {
//     fetch('/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//     })
//     .then(res => res.json())
//     .then(data => {
//         if (data.success) {
//             window.location.href = "/dashboard";  // Redirect on success
//         } else {
//             alert(data.message); // Show error message
//         }
//     })
//     .catch(error => console.error('Error:', error));
// }






// function registerUser() {
//     const name = document.getElementById('registerName').value;
//     const email = document.getElementById('registerEmail').value;
//     const password = document.getElementById('registerPassword').value;
//     const phone = document.getElementById('registerPhone').value;
//     const address = document.getElementById('registerAddress').value;

//     fetch('/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password, phone, address })
//     })
//     .then(res => res.json())
//     .then(data => {
//         alert(data.message);
//         if (data.success) toggleModal('registerModal');
//     })
//     .catch(error => console.error('Error:', error));
// }





function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.style.display === "none" || !modal.style.display) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

function loginUser(email, password) {
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            window.location.href = "/dashboard";
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}

function registerUser() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const phone = document.getElementById('registerPhone').value;
    const address = document.getElementById('registerAddress').value;

    if (!name || !email || !password || !phone || !address) {
        alert("All fields are required.");
        return;
    }

    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, phone, address })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        if (data.success) toggleModal('registerModal');
    })
    .catch(error => console.error('Error:', error));
}

