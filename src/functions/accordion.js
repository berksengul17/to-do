export default class Accordion {
  constructor(el) {
    // Get necessary DOM elements
    this.el = el;
    this.summary = el.querySelector("summary");
    this.projects = el.querySelector(".projects");
    // Store animation object (so we can cancel it if needed)
    this.animation = null;
    // Booleans to track if the details is closing or expanding
    this.isClosing = false;
    this.isExpanding = false;
    // Detect clicks on the summary element
    this.summary.addEventListener("click", (e) => this.onClick(e));
  }

  onClick(e) {
    // Stop default behaviour
    e.preventDefault();
    // Add overflow to avoid content overflow
    this.el.style.overflow = "hidden";

    // Check if the element is closing or is already closed
    if (this.isClosing || !this.el.open) {
      this.open();
    }
    // Check if the element is opening or is already open
    else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  open() {
    // Set a fixed height
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;

    // Wait for the next frame to call the expand function
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;

    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${
      this.summary.offsetHeight + this.projects.offsetHeight
    }px`;

    // If there is already an animation runnnig
    if (this.animation) {
      // Cancel the current animation
      this.animation.cancel();
    }

    this.animation = this.el.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: "ease-out",
      }
    );

    // When the animation is complete, call onAnimationFinish()
    this.animation.onfinish = () => this.onAnimationFinish(true);
    // If the animation is cancelled, isExpanding variable is set to false
    this.animation.oncancel = () => (this.isExpanding = false);
  }

  shrink() {
    this.isClosing = true;

    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    // If there is already an animation runnnig
    if (this.animation) {
      // Cancel the current animation
      this.animation.cancel();
    }

    this.animation = this.el.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 400,
        easing: "ease-out",
      }
    );

    // When the animation is complete, call onAnimationFinish()
    this.animation.onfinish = () => this.onAnimationFinish(false);
    // If the animation is cancelled, isClosing variable is set to false
    this.animation.oncancel = () => (this.isClosing = false);
  }

  onAnimationFinish(open) {
    this.el.open = open;
    // Reset
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;

    // Remove the overflow hidden and the fixed height
    this.el.style.height = this.el.style.overflow = "";
  }
}
