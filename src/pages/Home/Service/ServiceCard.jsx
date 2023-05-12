import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id,title, img, price } = service
    // console.log(service)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-5 pt-5 ">
                    <img src={img} alt="Shoes" className="rounded-xl w-96 h-52" />
                </figure>
                <div className="card-body items-start text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-red-500 font-semibold"> price:${price}</p>
                    <div className="card-actions">
                        <Link to={`/service/${_id}`}>
                            <button className="btn btn-primary">Service Now</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;