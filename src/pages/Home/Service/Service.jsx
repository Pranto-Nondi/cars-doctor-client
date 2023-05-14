import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`https://cars-doctor-server-nine.vercel.app/allService`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className="text-center mt-5">
                <h1 className="text-orange-400 font-bold">Service</h1>
                <h1 className="text-4xl font-semibold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mb-5 mt-5 p-5 ">
                {
                    services.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)



                }
            </div>

        </>
    );
};

export default Service;