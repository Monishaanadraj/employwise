import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./EditUser.module.css";  // Import CSS module

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });
    const [message, setMessage] = useState("");  // Success/Error message

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users/${id}`);
                setUser(response.data.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchUser();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log("Updating user:", user); // Debugging: Check data being sent

        try {
            const response = await axios.put(`https://reqres.in/api/users/${id}`, {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            });

            console.log("Update Response:", response.data); // Debugging: Check response

            setUser(response.data);  // Update local state
            alert("User updated successfully!"); // Show success alert

            // Navigate with updated user data
            navigate("/users", { state: { updatedUser: response.data } });
        } catch (error) {
            console.error("Update error:", error);
            alert("Failed to update user");
        }
    };


    return (
        <div className={styles.editUserContainer}>
            <form className={styles.editUserForm} onSubmit={handleUpdate}>
                <h2>Edit User</h2>
                <input
                    type="text"
                    className={styles.inputField}
                    value={user.first_name}
                    onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                    placeholder="First Name"
                    required
                />
                <input
                    type="text"
                    className={styles.inputField}
                    value={user.last_name}
                    onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                    placeholder="Last Name"
                    required
                />
                <input
                    type="email"
                    className={styles.inputField}
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Email"
                    required
                />
                <button type="submit" className={styles.updateButton}>Update</button>
            </form>
        </div>
    );
};

export default EditUser;
