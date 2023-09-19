import { Link } from "react-router-dom";


export const HeroCard = ({
    id,
    superhero,
    first_appearance,
    characters }) => {

    const heroImg = `./assets/heroes/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="orw no-gutters">

                    <div className="col-4">
                        <img src={heroImg} alt={superhero} className="card-img " />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text"> {characters}</p>
                            <p className="text-muted"> {first_appearance}</p>
                            <Link to={`/hero/${id}`}>
                                Mas info...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}