function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

function validateForm(){

    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;

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

function validateLogin(){
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    if(email === "" || password === ""){
        alert("Please enter both email and password");
        return false;
    }

    // Set login status in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    alert("Login successful! Welcome back to PawFind.");
    
    // Redirect to home page after successful login
    setTimeout(function() {
        window.location.href = "index.html";
    }, 500);
    
    return false;
}

function validateSignup(){
    let name = document.getElementById("signupName").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let confirmPassword = document.getElementById("signupConfirmPassword").value.trim();

    if(name === "" || email === "" || password === "" || confirmPassword === ""){
        alert("Please fill in all fields");
        return false;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match. Please try again.");
        return false;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Set login status in localStorage after successful signup
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name);

    alert("Account created successfully! Welcome to PawFind.");
    
    // Redirect to home page after successful signup
    setTimeout(function() {
        window.location.href = "index.html";
    }, 500);
    
    return false;
}

function googleSignIn(){
    console.log("Google Sign-In button clicked!"); // Debug log
    
    // Simple localStorage-based authentication for demo
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", "user@gmail.com");
    localStorage.setItem("userName", "Google User");
    
    alert("Login successful! Welcome to PawFind.");
    
    // Direct redirect without setTimeout for faster response
    window.location.href = "index.html";
    
    return false;
}
    return false;
}}

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
