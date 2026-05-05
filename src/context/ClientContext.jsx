import { createContext, useState } from "react";


const ClientContext = createContext();

function Provider ({children}) {
    const [data, setData] = useState({})
    return (
        <ClientContext.Provider value = {{data, setData}}>
            {children}
        </ClientContext.Provider>
    )
}

export {Provider};
export default ClientContext;