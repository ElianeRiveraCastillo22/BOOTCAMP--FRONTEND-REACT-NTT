// Footer.test.tsx
// Si tu componente es estatico, o sea, no tiene data variable o consume servicios y adem'as no es tan grande lo ideal es hacer un snapshot para evitar hacer tantos expect ya que al final hacer expect por cada texto de algo estatico no tiene mucho aporte.
import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
    it("should render the 'About' section with links", () => {
        render(<Footer />);
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Contact Us")).toBeInTheDocument();
        expect(screen.getByText("About Us")).toBeInTheDocument();
        expect(screen.getByText("Careers")).toBeInTheDocument();
        expect(screen.getByText("Press")).toBeInTheDocument();
    });

    it("should render the 'Policy' section with links", () => {
        render(<Footer />);
        expect(screen.getByText("Policy")).toBeInTheDocument();
        expect(screen.getByText("Return Policy")).toBeInTheDocument();
        expect(screen.getByText("Terms of Use")).toBeInTheDocument();
        expect(screen.getByText("Sitemap")).toBeInTheDocument();
        expect(screen.getByText("Privacy")).toBeInTheDocument();
        expect(screen.getByText("EPR Compliance")).toBeInTheDocument();
    });

    it("should render social media icons", () => {
        render(<Footer />);
        expect(screen.getByAltText("Icon Facebook")).toBeInTheDocument();
        expect(screen.getByAltText("Icon Instagram")).toBeInTheDocument();
        expect(screen.getByAltText("Icon twitter")).toBeInTheDocument();
        expect(screen.getByAltText("icon Youtube")).toBeInTheDocument();
    });

    it("should render the address and copyright", () => {
        render(<Footer />);
        expect(screen.getByText("Perú")).toBeInTheDocument();
        const copyrightText = screen.getByText(
            "© 2024 | SHOP All Rights Reserved"
        );
        expect(copyrightText).toBeInTheDocument();
    });
});
