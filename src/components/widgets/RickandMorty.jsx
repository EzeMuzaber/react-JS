import { Link } from "react-router-dom";
import { Button } from "antd";

function RickandMorty({ item }) {
    const { name, image, id } = item

    return (
        <div>
            <div className="user-card p-4 rounded-md shadow-md  group">
                <div className="overflow-hidden aspect-auto">
                    <img className="w-full rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150
                duration-500"src={image} alt="card image" />
                </div>
                <h2 className="my-2 font-bold">{name}</h2>
                <Button className="border">
                    <Link to={`/item/${id}`}>Ver mas</Link>
                </Button>
            </div>
        </div>

    )

}

export default RickandMorty;






