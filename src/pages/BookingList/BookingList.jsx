import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import BookingTable from './BookingTable';


const BookingList = () => {
    const [loader, setLoader] = useState(false)
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        setLoader(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                setLoader(false)
            })

    }, [url])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.deletedCount > 0) {
                    const remain = bookings?.filter(booking => booking._id !== id)
                    setBookings(remain)

                    setLoader(false)
                }
            })
    }
    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.modifiedCount > 0) {
                    const remain = bookings?.filter(booking => booking._id !== id)
                    const updated = bookings?.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remain];
                    setBookings(newBookings)

                    setLoader(false)
                }
            })
    }


    if (loader) {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div>
            <h2 className="text-5xl">Your bookings: {
                !loader &&
                bookings?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <BookingTable
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingList;