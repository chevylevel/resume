import { categories } from '../../mock-data';

export const useYearsRange = (currentSection: number) => {
    return Object.values(categories[currentSection].events)
        .reduce((acc, event) => {
            return [Math.min(acc[0], event.year), Math.max(acc[1], event.year)]
        },
            [Infinity, -Infinity],
        );
}
