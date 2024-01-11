const trailer = document.querySelector("#trailer");
    // mouse animation
window.onmousemove = e => {
    const x = e.clientX - trailer.offsetWidth/2,
          y = e.clientY - trailer.offsetHeight/2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px)`,
    }

    trailer.animate(keyframes, {
        duration: 80,
        fill: "forwards",
    });
}

    // menu animation
const menu = document.querySelector("#menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });

    // Cards Animatoin


    document.querySelector(".cards-content").onmousemove = e =>{
        for(const card of document.querySelectorAll(".card")){
            const react = card.getBoundingClientRect(),
            x = e.clientX - react.left,
            y = e.clientY - react.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };