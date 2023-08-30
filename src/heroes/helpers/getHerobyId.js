import { heroes } from "../data/heroesData";




export const getHerobyId = (id) => {

    return heroes.find(hero => hero.id === id);

}