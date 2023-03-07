import { render, screen } from "@testing-library/react";
import Index from "../src/pages/index";

describe("Index", () => {
    it("renders a heading", () => {
        render(<Index />);

        const heading = screen.getByRole("heading", {
            name: /Welcome to Next.js sandbox/i,
        });

        expect(heading).toBeInTheDocument();
    });
});
