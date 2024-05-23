class CardReward extends HTMLElement {
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
        
        /**
         * BRAND
         */
        const brandList = document.createElement("div");
        brandList.setAttribute("class", "brand__list");
        let stackSize = this.getAttribute("size");
        console.log(stackSize);

        const stacks = [];
        for (let index = 0; index < stackSize; index++) {
            stacks.push(document.createElement("img"));            
            stacks[index].src = this.getAttribute(`name${index}`);
            brandList.appendChild(stacks[index]);
        }

        const footer = document.createElement("footer");
        const div = document.createElement("div")
        footer.appendChild(div);
        
        const verify = document.createElement("a");
        verify.href = this.getAttribute("verify");
        verify.setAttribute("target", "_blank")
        
        div.appendChild(verify).innerHTML="Verify";

        const hr = document.createElement("div")
        footer.appendChild(hr).setAttribute("class", "hr")

        const toggleSkillOn = document.createElement("div");
        toggleSkillOn.setAttribute("id", "toggle-skill-on")
        footer.appendChild(toggleSkillOn).setAttribute("class", "read__more");
        const detail = document.createElement("p");
        const externalIcon = document.createElement("img");
        toggleSkillOn.appendChild(detail).innerHTML="Read More";
        toggleSkillOn.appendChild(externalIcon).setAttribute("src", "/static/img/arrow-right.svg");

        
        /**
         * MODEL
         */
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


        /**
         * Association components
         */
        componentRoot.appendChild(picture);
        componentRoot.appendChild(timeline);
        componentRoot.appendChild(title);
        componentRoot.appendChild(brandList);
        componentRoot.appendChild(footer);
        componentRoot.appendChild(skillModel);

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
                // margin: 0 4rem;
                margin-bottom: 4rem;
                width: 100%;
                max-width: 370px;
            }
            
            .card__list > .code__image {
                display: flex;
                justify-content: center;
                align-items: center;
                // overflow: hidden;
                width: 100%;
                border-radius: .8rem;
                // border-radius: 12rem;
                // border: 1px solid red;
            }

            .card__list > .code__image > img {
                width: 100%;
                height: 100%
            }

            .card__list > .brand__list > img {
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
                cursor: pointer;
            }
            .card__list > footer > .read__more > img {
                margin-left: .4rem;
                width: 15px;
            }

            .card__list .skill__model {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                padding: 0 20%;
                background-color: rgba(0,0,0,0.9);
            }
            
            .card__list .skill__model > div {
            
                position: relative;
                top: 22%;
                width: 100%;
                border-radius: 2rem;
                overflow: hidden;
                border: .15rem solid var(--slight-white-color);
                box-shadow: .4rem .4rem var(--slight-white-color);
                background-color: var(--color-sherbet-fade);
            }

            .card__list .skill__model > div > p {
                padding: 0 1rem;
                padding-bottom: .5rem;
            }
            
            .card__list .skill__model > div > .bar__header {
                display: flex;
                align-items: center;
                border-bottom: 2px solid var(--slight-white-color);
                padding: .4rem .6rem;
            }
            
            .card__list .skill__model > div > .bar__header > button {
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
            
            .card__list .skill__model p {
                margin-top: 2rem;
                text-align: justify;
            }
            
            .hidden {
                display: none;
            }

            @media screen and (min-width: 700px) {
                .card__list {
                    margin: 0 3.2rem;
                }
            }
        `;

        return style;
    }

}

customElements.define("card-reward", CardReward);