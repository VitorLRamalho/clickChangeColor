<button>changeBeckground</button>

const button =document.querySelector("button");

    const changeBeckground = () => {
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.background = `#${hexVal}`;
}

button.addEventListener("click", changeBeckground);