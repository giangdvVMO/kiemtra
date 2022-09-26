import { createContext, useState } from "react"

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({ name: 'x', age: 0 });
    const changeUser = (user) => {
        setUser((prev) => { return { ...user } });
    }
    return (
        <UserContext.Provider value={{ user, changeUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext };