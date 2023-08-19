

export default function MouseTraker() {
  if (typeof document === 'object') {

    function handleMouseMove(e) {
      let mouseFollower = document.getElementById("mouse-follower");
      if (!mouseFollower) {
        const body = document.body;
        mouseFollower = document.createElement("div");
        mouseFollower.id = "mouse-follower";
        body.appendChild(mouseFollower);
      }
      const x = e.clientX;
      const y = e.clientY;
      mouseFollower.style.left = `${x}px`;
      mouseFollower.style.top = `${y}px`;
    }



    function checkScreenSize() {
// check The Screen Size to Know that if the screen for mobile devices or PCs or laptops
      if (window.matchMedia("(max-width: 768px)").matches) {
        document.removeEventListener("mousemove", handleMouseMove);
      } else {
        document.addEventListener("mousemove", handleMouseMove);
      }
    }

    // Check screen size on page load
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);


    // if (typeof document === 'object') {
    //   document.addEventListener("mousemove",)
    // }
  }
}