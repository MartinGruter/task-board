import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Column from "../components/Column";

describe("Column", () => {
  it("visar titel och innehåll", () => {
    render(
      <Column title="Todo">
        <p>Children innehåll</p>
      </Column>
    );

    expect(screen.getByRole("heading", { name: "Todo" })).toBeInTheDocument();
    expect(screen.getByText("Children innehåll")).toBeInTheDocument();
  });
});