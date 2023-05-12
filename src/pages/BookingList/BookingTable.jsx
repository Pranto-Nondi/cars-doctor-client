import React from 'react';

const BookingTable = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, date, service, price, img, status } = booking;
    // console.log(status)
    return (
        <>
            <tr>
                <td><button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button></td>
                <td><div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div></td>
                <td>{service}</td>
                <td>{date}</td>
                <td>${price}</td>
                <td>
                    {status ? <button className="btn btn-bg-success btn-xs">Confirmed</button> : <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}

                </td>
            </tr>
        </>
    );
};

export default BookingTable;