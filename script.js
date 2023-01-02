const button = document.querySelector("button");

function isTweening() {
  let scanner = gsap.isTweening(".scanner");
  let button = gsap.isTweening("button");

  return scanner || button;
}

button.addEventListener("click", function (e) {
  e.preventDefault();

  if (isTweening()) return;

  const tl = gsap.timeline();

  gsap.set(".scanner", {
    x: 0,
    background: "#292e3e",
    boxShadow: `0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #228dff,
    0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff`
  });

  gsap.set("button", {
    innerHTML: "Copy"
  });

  tl.to("button", {
    innerHTML: "Copying",
    outline: "none",
    boxShadow: `0px 0px 0px rgba(163, 177, 198, 0.6),
    0px 0px 0px rgba(255, 255, 255, 0.5)`,
    cursor: "wait",
    duration: 0.01
  })
    .to("button", {
      innerHTML: "Copying.",
      duration: 0.4
    })
    .to("button", {
      innerHTML: "Copying..",
      duration: 0.4
    })
    .to("button", {
      innerHTML: "Copying...",
      duration: 0.4
    })
    .to(
      ".scanner",
      {
        boxShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228dff,
    0 0 35px #228dff, 0 0 40px #228dff, 0 0 50px #228dff, 0 0 75px #228dff`,
        background: "white",
        duration: 0.2,
        ease: "none"
      },
      "-=1.4"
    )
    .to(
      ".scanner",
      {
        x: 420,
        duration: 1,
        ease: "none"
      },
      "-=1"
    )
    .to(".scanner", {
      boxShadow: `0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #228dff,
    0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff, 0 0 0px #228dff`,
      background: "#292e3e",
      duration: 0.2,
      ease: "none"
    })
    .to(
      "button",
      {
        innerHTML: "Copied!",
        outline: "none",
        boxShadow: `0px 0px 0px rgba(163, 177, 198, 0.6),
    0px 0px 0px rgba(255, 255, 255, 0.5);`
      },
      "-=0.1"
    )
    .to(
      "button",
      {
        innerHTML: "Copy",
        boxShadow: `1px 1px 2px rgba(163, 177, 198, 0.6),
    -1px -1px 2px rgba(255, 255, 255, 0.5)`,
        cursor: "pointer"
      },
      "+=1"
    );
});
