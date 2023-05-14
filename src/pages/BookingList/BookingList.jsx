import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import BookingTable from './BookingTable';
import { useNavigate } from 'react-router-dom';


const BookingList = () => {
    const [loader, setLoader] = useState(false)
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()
    const url = `https://cars-doctor-server-nine.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        setLoader(true)
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                    setLoader(false)
                }
                else {
                    // logout and then navigate
                    navigate('/')

                }

            })

    }, [url,navigate])

    const handleDelete = (id) => {
        fetch(`https://cars-doctor-server-nine.vercel.app/bookings/${id}`, {
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
        fetch(`https://cars-doctor-server-nine.vercel.app/bookings/${id}`, {
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
                    console.log(updated)
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