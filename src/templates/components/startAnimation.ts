import gsap from "gsap";

export default function StartAnimation() {
  const ctx = gsap.context(() => {
    const t1 = gsap.timeline();
    t1.from("#theWeddingOf", {
      opacity: 0,
      duration: 1,
      delay: 2.3,
    })
      .from(
        "#dewa",
        {
          x: "-=50",
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=0.4"
      )
      .from(
        "#dan",
        {
          opacity: 0,
          duration: 0.7,
          ease: "power1.out",
        },
        "<"
      )
      .from(
        "#tina",
        {
          x: "+=50",
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        "<"
      )
      .from(
        "#dateParent",
        {
          opacity: 0,
        },
        "-=0.4"
      )
      .from(
        "#day",
        {
          opacity: 0,
          x: "-=30",
          duration: 0.5,
        },
        "<"
      )
      .from(
        "#month",
        {
          opacity: 0,
          x: "+=15",
          duration: 0.5,
        },
        "<"
      )
      .from("#year", {
        opacity: 0,
        y: "+=15",
        duration: 0.5,
      })
      .from(
        "#date",
        {
          opacity: 0,
          y: "-=30",
          duration: 0.5,
        },
        "<"
      );
  });

  return () => ctx.revert();
}
