import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const heroes = getHeroesByName(q);

    const { searchHero, onInputChange } = useForm({
        searchHero: q,
    });

    const onSearchSubmitChange = (event) => {
        event.preventDefault();
        if (searchHero.trim().length <= 1) return;
        navigate(`?q=${searchHero.toLowerCase().trim()}`);

    }


    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmitChange}>
                        <input type="text"
                            placeholder="your  hero"
                            className="form-control"
                            autoComplete="off"
                            name="searchHero"
                            onChange={onInputChange}
                            value={searchHero} />
                        <button className="btn btn-outline-primary mt-1">
                            search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>results</h4>
                    <hr />
                    {
                        (q === '')
                            ?
                            <div className="alert alert-primary animate__animated animate__fadeInRight"> Search a hero</div>
                            : (heroes.length === 0) &&
                            <div className="alert alert-danger animate__animated animate__fadeInRight">
                                There's no hero with <b>{q}</b>          </div>
                    }

                    {heroes.map(hero => <HeroCard key={hero.id} {...hero} />)}
                </div>
            </div>
        </>
    )
}