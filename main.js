let tl = gsap.timeline();

// Preloader animation
tl.to(".preloader", {
  y: "-100%", // Moves the preloader up and out of view
  borderRadius: "10% 10% 36% 39% / 10% 10% 55% 56%", // Curve on the bottom left
  duration: 1, // Duration of the animation
  ease: "power2.out", // Optional easing for smooth effect
})
  .add(() => {
    document.querySelector(".preloader").style.display = "none"; // Hide the preloader after the animation
  })
  .from(".navbar", {
    duration: 1,
    y: "-100%",
  });

// Animate SVG paths
let paths = document.querySelectorAll("svg path"); // Select all <path> elements within the SVG

tl.to(paths, {
  y: 0, // Start moving the path to its original position
  opacity: 1, // Optional: fade in the paths
  stagger: 0.2, // Delay each path by 0.2 seconds
  duration: 1, // Duration of each animation
  ease: "power2.out", // Smooth easing
  onStart: function () {
    paths.forEach((path) => (path.style.transform = "translateY(100%)")); // Start paths from below view
  },
});

// Animate SVG icon, h4, paragraph, and button in order
tl.from(".left svg", {
  y: 30, // Start 30px below
  opacity: 0, // Start invisible
  duration: 0.6, // Animation duration
  ease: "power2.out", // Easing function
})
  .from(
    ".left h4",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4" // Start 0.4 seconds before the previous animation ends
  )
  .from(
    ".left p",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4" // Start 0.4 seconds before the previous animation ends
  )
  .from(
    ".left .leftBtn", // Button animation
    {
      y: 30, // Move 30px down (from above)
      opacity: 0, // Start invisible
      duration: 0.6, // Same duration as others
      ease: "power2.out",
    },
    "-=0.4" // Start 0.4 seconds before the previous animation ends
  )
  .from(
    ".middle",
    {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.4" // Same overlap as previous animations
  )
  .from(
    ".right p",
    {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.4" // Same overlap as previous animations
  )
  .from(
    ".right h2",
    {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    },
    "-=0.4" // Same overlap as previous animations
  );
