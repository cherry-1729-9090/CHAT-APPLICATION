import { createContext, useState } from "React";

export const AccountContext = createContext();

const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState(null);

    return (
        <AccountContext.Provider value={{ account, setAccount }}>
            {children}
        </AccountContext.Provider>
    );
};

export default AccountProvider;
