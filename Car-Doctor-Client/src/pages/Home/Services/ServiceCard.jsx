import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const {_id, title, img, price } = service;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="">
                <img src={img} alt="Shoes" className="rounded-xl h-[250px] w-full" />
            </figure>
            <div className="px-10  pt-10 card-body flex flex-row justify-between items-center gap-3">
                <div>
                    <h2 className="card-title">{title}</h2>
                     <p className="text-xl text-orange-500">Price: ${price}</p>
                </div>
                <div className="card-actions">
                   <Link to={`/book/${_id}`}>
                   <button className="btn btn-primary bg-orange-500 hover:bg-orange-600 border-none text-white ">Book Now</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;