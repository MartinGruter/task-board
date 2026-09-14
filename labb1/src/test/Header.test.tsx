import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "../components/Header";

describe("Header", () => {
  it("visar rubriken Webbutveckling", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", { name: "Webbutveckling" }),
    ).toBeInTheDocument();
  });
  it("visar Task Board", () => {
    render(<Header />);

    expect(screen.getByText("Task Board")).toBeInTheDocument();
  });
  it("Visar introduktionstext i p-taggen", () => {
    render(<Header />);

    expect(
      screen.getByText("Det här är en checklista för att underlätta vardagen"),
    ).toBeInTheDocument();
  });
});
