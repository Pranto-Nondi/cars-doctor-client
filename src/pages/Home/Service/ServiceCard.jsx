

const ServiceCard = ({ service }) => {
    const { title, img, price } = service
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
                        <button className="btn btn-primary">Service Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;