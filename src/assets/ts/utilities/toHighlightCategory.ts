

export default function toHighlightCategory(target: string): void {
    const list = document.querySelector('#nav_options')!;
    const cards: any[] = [...list.children];

    for (const card of cards) {
        target == card.id
            ? card.classList.add('highlighted')
            : card.classList.remove('highlighted')
    }

}