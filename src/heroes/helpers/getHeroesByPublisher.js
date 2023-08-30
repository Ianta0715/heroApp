import { heroes } from "../data/heroesData";


export const getHeroesByPublisher = (publisher) => {
    const validpublisher = ['DC Comics', 'Marvel Comics'];
    if (!validpublisher.includes(publisher)) {
        throw new Error(`${publisher} is not valid`);
    }
    return heroes.filter((hero) => hero.publisher === publisher);

}
