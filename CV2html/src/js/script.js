/*Change backround when clicking img */
// Define background image URLs
var backgroundImage1 = "url(https://images.prismic.io/visithalland2/52142491-e401-4794-9c4c-1cb1c6bca697_Varberg_Kallbadhuset_2019_Varbergskommun_DestinationVarberg_FotografNatalieGreppi_HQ-90.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max)";
var backgroundImage2 = "url(https://images.prismic.io/visithalland2/68e417f6-5887-4aef-bd4d-7dcde4de7214_Varberg_Strandpromenaden_2019_Varbergskommun_DestinationVarberg_FotografNatalieGreppi_small.jpeg?ixlib=gatsbyFP&fit=max&auto=compress%2Cformat&w=8192)";
var backgroundImage3 = "url(https://images.prismic.io/visithalland2/a98dbfef-31ec-4662-b7fd-429263cbe1e8_Varberg_Varbergsfastning_2019_Varbergskommun_DestinationVarberg_FotografNatalieGreppi_small.jpeg?ixlib=gatsbyFP&fit=max&auto=compress%2Cformat&w=8192)";
var backgroundImage4 = "url(https://images.prismic.io/visithalland2/1a7220b3-bee4-465e-a226-9b1444e7b891_Varberg_Apelviken_2019_Varbergskommun_DestinationVarberg_FotografNatalieGreppi_small.jpeg?ixlib=gatsbyFP&fit=max&auto=compress%2Cformat&w=8192)";
var backgroundImage5 = "url(https://images.prismic.io/visithalland2/b8f4988b-5b4e-4717-8d01-7acd8c4b6a41_Varberg_Simstadion_2019_Varbergskommun_DestinationVarberg_FotografNatalieGreppi_small.jpeg?ixlib=gatsbyFP&fit=max&auto=compress%2Cformat&w=8192)";

// Array to hold all background images
var backgroundImages = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5];

// Index to keep track of the current background image
var currentBackgroundIndex = 0;

// Function to set background image based on index
function setBackgroundImage() {
    document.body.style.backgroundImage = backgroundImages[currentBackgroundIndex];
}

// Retrieve the currentBackgroundIndex from localStorage on page load
document.addEventListener("DOMContentLoaded", function() {
    // If currentBackgroundIndex exists in localStorage, retrieve it
    if(localStorage.getItem("currentBackgroundIndex")) {
        currentBackgroundIndex = parseInt(localStorage.getItem("currentBackgroundIndex"));
    } else {
        // If not, set the initial index to 0
        localStorage.setItem("currentBackgroundIndex", currentBackgroundIndex);
    }

    // Set the background image based on the retrieved index
    setBackgroundImage();
});

// Listen for click event on the button
document.querySelector(".easteregg-button").addEventListener("click", function() {
    // Update background image index for the next image
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    
    // Set the background image
    setBackgroundImage();

    // Store the updated currentBackgroundIndex in localStorage
    localStorage.setItem("currentBackgroundIndex", currentBackgroundIndex);
});




/* 1337 modal JS*/
let pressedKeys = "";
  window.addEventListener("keydown", function(event) {    
    pressedKeys += event.key;

    if (pressedKeys.endsWith("1337")) {
      
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
  
        let youtubeVideo = document.getElementById("youtubeVideo");
        youtubeVideo.src = "https://www.youtube.com/embed/MPAIb1nC4vU?si=6c1xRLmNDkU3-DB8;start=21&autoplay=1";
  
        pressedKeys = "";
      }
    });
  
    let closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
      let modal = document.getElementById("myModal");
      modal.style.display = "none";
  
      let youtubeVideo = document.getElementById("youtubeVideo");
      youtubeVideo.src = ""; 
    };


    



