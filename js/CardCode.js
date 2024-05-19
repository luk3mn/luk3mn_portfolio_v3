class CardCode extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("li")
        componentRoot.setAttribute("class", "card__list")


        const picture = document.createElement("div")
        picture.setAttribute("class", "code__image")

        const cardImage = document.createElement("img")
        cardImage.src = this.getAttribute("image")
        
        picture.appendChild(cardImage)


        const timeline = document.createElement("p"); 
        timeline.setAttribute("class", "timeline");
        const setTimeline = document.createElement("timeline")
        timeline.textContent = this.getAttribute("time");
        const underline = document.createElement("span");
        underline.setAttribute("class", "underline")
        
        timeline.appendChild(setTimeline);
        timeline.appendChild(underline)
        
        const title = document.createElement("h3");
        title.setAttribute("class", "[ h5 ]");
        title.textContent = this.getAttribute("title");
        

        const stackList = document.createElement("div");
        stackList.setAttribute("class", "stack__list");
        let stackSize = this.getAttribute("size");
        console.log(stackSize);

        const stacks = [];
        for (let index = 0; index < stackSize; index++) {
            stacks.push(document.createElement("img"));            
            stacks[index].src = this.getAttribute(`name${index}`);
            stackList.appendChild(stacks[index]);
        }

        const footer = document.createElement("footer");
        const div = document.createElement("div")
        footer.appendChild(div);
        
        const code = document.createElement("a");
        code.href = this.getAttribute("github");
        code.setAttribute("target","_blank")
        
        const span = document.createElement("span");
        const deploy = document.createElement("a");
        deploy.href = this.getAttribute("deploy");
        deploy.setAttribute("target","_blank")
        
        div.appendChild(code).innerHTML="Code";
        // div.appendChild(span).innerHTML=" | ";
        div.appendChild(deploy).textContent = this.getAttribute("deploy-name");

        const hr = document.createElement("div")
        footer.appendChild(hr).setAttribute("class", "hr")

        const readMore = document.createElement("div");
        footer.appendChild(readMore).setAttribute("class", "read__more");
        const external = document.createElement("a");
        external.href = this.getAttribute("doc");
        external.setAttribute("target","_blank")
        const externalIcon = document.createElement("img");
        readMore.appendChild(external).innerHTML="Read More";
        readMore.appendChild(externalIcon).setAttribute("src", "img/arrow-right.svg");



        componentRoot.appendChild(picture);
        componentRoot.appendChild(timeline);
        componentRoot.appendChild(title);
        componentRoot.appendChild(stackList);
        componentRoot.appendChild(footer);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        a {
            text-decoration: none;
            color: var(--slight-white-color);
        }
        
        .card__list {
            margin: 0 1rem;
            margin-bottom: 4rem;
            width: 100%;
            max-width: 270px;
        }

        .card__list > .code__image {
            overflow: hidden;
            width: 100%;
            height: 235px;
            border-radius: .8rem;
        }

        .card__list > .code__image > img {
            width: 100%;
        }

        .card__list > .stack__list > img {
            height: 25px;
            margin: 0 .2rem;
        }

        .card__list > .timeline {
            display: flex;
            align-items: center;
            
            width: 100%;
        }
        
        .card__list > .timeline > .underline {
            flex: 1;
            border: 1px solid var(--color-underline);
            margin-left: .4rem
        }

        .card__list time {
            margin-right: .5rem;
            font-weight: 600;
            font-size: 1rem;
        }

        .card__list > .h5 {
            font-size: 1.6rem;
            font-weight: 700;
            margin: 1rem 0;
        }

        .card__list > footer {
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .card__list > footer > .hr {
            flex: 1;
            border: 1px solid var(--color-underline);
            margin: 0 .3rem;
        }

        .card__list > footer > .read__more {
            display: flex;
            align-items: center;
        }
        .card__list > footer > .read__more > img {
            margin-left: .4rem;
            width: 15px;
        }
        `;

        return style;
    }

}

customElements.define("card-code", CardCode);