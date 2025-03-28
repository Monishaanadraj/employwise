import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Users.module.css"; // Import CSS module


const Users = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login"); // Redirect to login if token is missing
            return;
        }

        const fetchUsers = async () => {
            const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
            let fetchedUsers = response.data.data;

            // 🔥 Check if an updated user is passed
            if (location.state?.updatedUser) {
                fetchedUsers = fetchedUsers.map(user =>
                    user.id === location.state.updatedUser.id ? location.state.updatedUser : user
                );
            }

            setUsers(fetchedUsers);
        };

        fetchUsers();
    }, [page, location.state]);  // Refresh when page or updatedUser changes

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`https://reqres.in/api/users/${id}`);
            setUsers(users.filter(user => user.id !== id));
            alert("User deleted successfully!");
        } catch (error) {
            alert("Failed to delete user.");
        }
    };

    return (
        <div className={styles.usersContainer}>
            <h2 className={styles.title}>Users List</h2>
            {loading && <p className={styles.loading}>Loading users...</p>}
            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.usersGrid}>
                {users.map((user) => (
                    <div key={user.id} className={styles.userCard}>
                        <img src={user.avatar} alt="avatar" className={styles.userAvatar} />
                        <p className={styles.userName}>{user.first_name} {user.last_name}</p>
                        <p className={styles.userEmail}>{user.email}</p>
                        <div className={styles.actions}>
                            <button onClick={() => navigate(`/edit/${user.id}`)} className={styles.editButton}>Edit</button>
                            <button onClick={() => handleDelete(user.id)} className={styles.deleteButton}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.pagination}>
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    className={styles.pageButton}
                    disabled={page === 1}
                >
                    Prev
                </button>
                <button
                    onClick={() => setPage((p) => p + 1)}
                    className={styles.pageButton}
                    disabled={users.length === 0}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Users;
