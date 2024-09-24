// Function to replace the entire HTML content with the verification page
function showVerificationPage() {
  // Replace the body content with the verification page's HTML
  document.body.innerHTML = `
        <div class="verifiedPage">
          <div
            id="lottie-animation2"
            style="
              width: 40rem;
              height: 40rem;
              align-items: center;
              background: #2c73eb;
            "
          ></div>
        </div>
      `;

  // Reinitialize the Lottie animation after the HTML content is replaced
  var animation2 = lottie.loadAnimation({
    container: document.getElementById("lottie-animation2"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "Sources/images/Animation - 1727103464218.json",
  });
}

// Add event listener to the login button
document.getElementById("loginBtn").addEventListener("click", function () {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Check if both fields are filled
  if (email && password) {
    showVerificationPage(); // Replace the HTML with the verification page
  } else {
    alert("Please fill out both email and password fields.");
  }
});
