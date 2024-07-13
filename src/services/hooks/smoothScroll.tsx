export default function smoothScrollTo(
  element: HTMLElement,
  target: number,
  duration: number
) {
  const start = element.scrollLeft;
  const change = target - start;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    element.scrollLeft = start + change * progress;

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}
