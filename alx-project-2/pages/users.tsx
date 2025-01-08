import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { User } from "@/interfaces";

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
        };
        fetchUsers();
    }, []);
    return (
        <div>
            <Header />
            <h1>Users Page</h1>
            <h2 className="mt-4 text-xl font-bold">All Users</h2>
            <div className="mt-4">
                {users.map(user => (
                    <UserCard key={user.id} name={user.name} email={user.email} address={user.address.street} />
                ))}
            </div>
        </div>
    );
}