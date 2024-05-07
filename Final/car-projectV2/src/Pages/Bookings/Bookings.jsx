import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [userEmail, setUserEmail] = useState(null); // Initialize userEmail state

    const handleDelete = (id)=>{
        const proceed = confirm("Are you sure ?")
        if(proceed){
          fetch(`http://localhost:5000/bookings/${id}`,{
            method:"DELETE"
          })
          .then(res => res.json())
          .then( data =>{
            console.log(data)
            if(data.deletedCount > 0){
                alert("Successful");
                const reaminig = bookings.filter(booking => booking._id !==id)
                setBookings(reaminig);
            }
          })
        }
    }
    const handleConform = id =>{
        const proceed = confirm("Are you Update ?")
        if(proceed){
          fetch(`http://localhost:5000/bookings/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status:"confirm"})
          })
          .then(res => res.json())
          .then( data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                alert("Successfuly done");
                const remaining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => 
                booking._id === id)
                updated.status = 'Confirm'
                const newBookings = [updated,...remaining]
                setBookings(newBookings)

                
                
            }
          })
        }
    }




    useEffect(() => {
        // Check if user is available
        if (user) {
            setUserEmail(user.email); // Set userEmail when user is available
        }
    }, [user]); // Trigger effect when user state changes

    useEffect(() => {
        // Fetch data only when userEmail is available
        if (userEmail) {

            const url = `http://localhost:5000/bookings?email=${userEmail}`;
            
            fetch(url,{credentials:'include'}) // sending cookies in backend
                .then(res => res.json())
                .then(data => {
                    setBookings(data);
                    console.log(data)
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [userEmail]); // Trigger effect when userEmail changes


    // console.log(bookings)
    return (
        <div>
            <div>length : {bookings.length}</div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox ml-3" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                    
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        bookings.map((booking)=>
                        <BookingRow 
                        key={booking._id} 
                        booking={booking} 
                        handleDelete={handleDelete}
                        handleConform= {handleConform}
                        ></BookingRow>)
                       }
                        
                    </tbody>
                  

                </table>
            </div>
        </div>
    );
};

export default Bookings;
