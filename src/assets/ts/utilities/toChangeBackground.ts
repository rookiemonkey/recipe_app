
export default function toChangeBackground(bg: number): void {

    const body = document.body as HTMLBodyElement;

    body.style.background = require(`../../images/bg${bg}.jpg`).default;

}