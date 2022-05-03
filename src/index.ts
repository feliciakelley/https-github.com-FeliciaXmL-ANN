import { controller, target } from "@github/catalyst";

const template = document.createElement("template");
template.innerHTML = `<style>
          * {
            font-size: 200%;
          }

          span {
            width: 4rem;
            display: inline-block;
            text-align: center;
          }

          button {
            width: 4rem;
            height: 4rem;
            border: none;
            border-radius: 10px;
            background-color: seagreen;
            color: white;
          }
        </style>
        <button data-action="click:my-counter#dec">-</button>
        <span data-target="my-counter.value"></span>
        <button data-action="click:my-counter#inc">+</button>`;

@controller
class MyCounterElement extends HTMLElement {
  @target value: HTMLElement;

  count: number = 0;

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.update();
  }

  inc() {
    this.count++;
    this.update();
  }

  dec() {
    this.count--;
    this.update();
  }

  update() {
    this.value.textContent = "" + this.count;
  }
}
