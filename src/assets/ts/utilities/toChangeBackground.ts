
export default async function toChangeBackground(bg: number): Promise<void> {

    const body = document.body as HTMLBodyElement;

    const newBg = await import(`../../images/bg${bg}.jpg`);

    body.style.backgroundImage = `url(${newBg.default})`;

}