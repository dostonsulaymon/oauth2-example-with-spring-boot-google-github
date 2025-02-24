import React, {useEffect, useState} from "react";
import axios from "axios";

export const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/user-info', {withCredentials: true})
            .then(res => {
                setUser(res.data)
            })
            .catch(err => console.log("Error was seen: ", err));
    }, [])

    return (
        <>
            <h1>Dashboard</h1>
            {user ? (
                <div>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    {user.picture && <img src={user.picture}
                                          alt={"User picture"}
                                          referrerPolicy={"no-referrer"}/>}
                </div>
            ) : (
                <p>Loading user data...</p>
            )}

            <h4>Hello from frontend!</h4>
        </>
    )
}