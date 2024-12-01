import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useContext } from "react";
import { filterContext, FilterProvider } from "../filters.provider";

const TestComponent = () => {

    const context = useContext(filterContext);

    if (!context) {
        return null;
    }

    const { searchByTitle, setSearchByTitle, searchByCategory, setSearchByCategory } = context;

    return (
        <div>
            <p>{searchByTitle}</p>
            <p>{searchByCategory}</p>
            <button onClick={() => setSearchByTitle("New Title")}>Set Title</button>
            <button onClick={() => setSearchByCategory("New Category")}>Set Category</button>
        </div>
    );
};

describe("FilterProvider", () => {
    it("should provide and update searchByTitle and searchByCategory", async () => {

        render(
            <FilterProvider>
                <TestComponent />
            </FilterProvider>
        );

        expect(screen.getByText("Set Title")).toBeInTheDocument();
        expect(screen.getByText("Set Category")).toBeInTheDocument();

        act(()=>{
            fireEvent.click(screen.getByText("Set Title"));
        })


        await waitFor(() => {
            expect(screen.getByText("New Title")).toBeInTheDocument();
        });

        act(()=>{
            fireEvent.click(screen.getByText("Set Category"));
        })

        await waitFor(() => {
            expect(screen.getByText("New Category")).toBeInTheDocument();
        });
    });
});
