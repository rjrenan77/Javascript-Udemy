const colors = {
    p: "green",
    div: "blue",
    span: "yellow",
    section: "brown",
    ul: "aqua",
    ol: "red",
    header: "black",
    nav: "grey",
    main: "silver",
    footer: "blue",
    form: "black",
    body: "red",
    padrao: "green",

    get(tag){
        return this[tag] ? this [tag] : this.padrao;
    }
}

document.querySelectorAll(".tag").forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase();

    elemento.style.borderColor = colors.get(tagName);

    if(!elemento.classList.contains("nolabel")) {
        const label = document.createElement("label");
        label.style.backgroundColor = colors.get(tagName);
        label.innerHTML = tagName;
        elemento.insertBefore(label, elemento.childNodes[0]);
    }
});