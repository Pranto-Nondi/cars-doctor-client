import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  lg:flex-row">
                    <div className='relative lg:w-1/2'>
                        <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
                        <img src={parts} className=" absolute w-[60%] top-1/2 left-1/3 border-8 border-white rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2 space-y-5 p-5'>
                        <h3 className='text-3xl text-orange-500 font-bold ' >About Us</h3>
                        <h1 className="text-3xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <br />
                        <p className="py-5">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;