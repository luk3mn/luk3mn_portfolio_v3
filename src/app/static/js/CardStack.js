class CardStack extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("li")
        componentRoot.setAttribute("class", "learning__item")


        const div = document.createElement("div");
        const stack = document.createElement("p");
        stack.setAttribute("class", "notranslate");
        
        const stackIcon = document.createElement("i");
        div.appendChild(stackIcon).setAttribute("class", this.getAttribute("stack-icon"));
        div.appendChild(stack).textContent = this.getAttribute("stack-name");

        const toggleSkillOn = document.createElement("img")
        toggleSkillOn.setAttribute("src", "/static/img/plus-solid.svg");
        toggleSkillOn.setAttribute("id", "toggle-skill-on")
        

        const skillModel = document.createElement("span");
        skillModel.setAttribute("class", "skill__model hidden")

        const genericDiv = document.createElement("div");
        skillModel.appendChild(genericDiv);

        const barHeader = document.createElement("div");
        barHeader.setAttribute("class", "bar__header")
        genericDiv.appendChild(barHeader);

        const toggleSkillOff = document.createElement("button")
        toggleSkillOff.setAttribute("id", "toggle-skill-off")

        barHeader.appendChild(toggleSkillOff).textContent="X"


        const buttons = [];
        for (let index = 0; index < 2; index++) {
            buttons.push(document.createElement("button"));
            barHeader.appendChild(buttons[index]).textContent='X'
        }
        
        const detail1 = document.createElement("p");
        detail1.textContent = this.getAttribute("detail-1");
        const detail2 = document.createElement("p");
        detail2.textContent = this.getAttribute("detail-2");

        genericDiv.appendChild(detail1); 
        genericDiv.appendChild(detail2); 

        // Click to open model
        toggleSkillOn.addEventListener("click", function() {
            skillModel.classList.remove("hidden")
        });

        // Click to close model
        toggleSkillOff.addEventListener("click", function() {
            skillModel.classList.add("hidden")
        });

        componentRoot.appendChild(div);
        componentRoot.appendChild(toggleSkillOn);
        componentRoot.appendChild(skillModel);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            @import url("https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css");

            .learning__item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                
                border: .15rem solid var(--slight-white-color);
                box-shadow: .4rem .4rem var(--slight-white-color);
                background-color: var(--color-mint);
                list-style: none;
                margin: 1.3rem;
                padding: 0 1rem;
                
                width: 490px;
                
                font-size: var(--step-1);
                color: var(--slight-white-color);
            }
            
            .learning__item > div {
                display: flex;
                align-items: center;
            }
            
            .learning__item > div > i {
                margin: 0 .4rem;
            }
            
            .learning__item > img {
                cursor: pointer;
                width: var(--step-1);
            }
            
            .learning__item > .skill__model {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                padding: 0 20%;
                background-color: rgba(0,0,0,0.9);
            }
            
            .learning__item > .skill__model > div {
            
                position: relative;
                top: 22%;
                width: 100%;
                border-radius: 2rem;
                overflow: hidden;
                border: .15rem solid var(--slight-white-color);
                box-shadow: .4rem .4rem var(--slight-white-color);
                background-color: var(--color-sherbet-fade);
            }

            .learning__item > .skill__model > div > p {
                padding: 0 1rem;
                padding-bottom: .5rem;
            }
            
            .learning__item > .skill__model > div > .bar__header {
                display: flex;
                align-items: center;
                border-bottom: 2px solid var(--slight-white-color);
                padding: .4rem .6rem;
            }
            
            .learning__item > .skill__model > div > .bar__header > button {
                border-radius: 1rem;
                height: 20px; */
                padding: .1rem .3rem;
                margin: .2rem;
                border: none;
            }
            
            .bar__header > button:nth-child(1) {
                background-color: rgb(170, 46, 46);
                font-weight: 700;
                cursor: pointer;
                color: var(--slight-white-color);
            }
            
            .bar__header > button:nth-child(2) {
                background-color: rgb(216, 170, 42);
                color: rgb(216, 170, 42);
            }
            
            .bar__header > button:nth-child(3) {
                background-color: rgb(30, 128, 27);
                color: rgb(30, 128, 27);
            }
            
            .learning__item > .skill__model p {
                margin-top: 2rem;
                text-align: justify;
            }
            
            .hidden {
                display: none;
            }

            @media screen and (max-width: 905px) {
                .learning__item {
                    width: 180px;
                }
            }
        `;

        return style;
    }

}

customElements.define("card-stack", CardStack);