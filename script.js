function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

function validateForm(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if(name=="" || phone==""){
        alert("Fill all fields");
        return false;
    }

    alert("Application Submitted Successfully");   
    return true;  
}

function validateContactForm(){
    let name = document.getElementById("contactName").value.trim();
    let email = document.getElementById("contactEmail").value.trim();
    let message = document.getElementById("contactMessage").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill in all required fields (Name, Email, and Message)");
        return false;
    }

    alert("Thank you! Your message has been sent successfully. We'll get back to you soon.");
    return false; // Prevent page reload since no backend exists
}

function checkAuth(){
    // Get current page filename
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Pages that don't require authentication
    const publicPages = ["login.html", "signup.html"];

    // Don't run auth check on public pages
    if(publicPages.includes(currentPage)){
        return; // Allow access to login/signup even if already logged in
    }

    // For protected pages, check if logged in
    if(isLoggedIn !== "true"){
        window.location.href = "login.html";
    }
}

function logout(){
    // Clear login status
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");

    alert("You have been logged out successfully.");

    // Redirect to login page
    setTimeout(function() {
        window.location.href = "login.html";
    }, 500);
}

// Run auth check when page loads (only once DOM is ready)
if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function() {
        checkAuth();
    });
} else {
    checkAuth();
}