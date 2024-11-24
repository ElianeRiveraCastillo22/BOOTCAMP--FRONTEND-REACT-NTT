import { createContext, ReactNode, useState } from "react";

interface Props{
    children: ReactNode
}

interface FilterContextType {
    searchByTitle: string;
    setSearchByTitle: React.Dispatch<React.SetStateAction<string>>;
    searchByCategory: string;
    setSearchByCategory: React.Dispatch<React.SetStateAction<string>>;
}

const filterContext = createContext<FilterContextType | undefined>(undefined);

const FilterProvider = ({children}: Props) => {

    const [searchByTitle, setSearchByTitle] = useState("");
    const [searchByCategory, setSearchByCategory] =useState("")

    return (
        <filterContext.Provider value={{ 
            setSearchByTitle,
            searchByTitle,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </filterContext.Provider>
    );

};

export {
    filterContext,
    FilterProvider
}
