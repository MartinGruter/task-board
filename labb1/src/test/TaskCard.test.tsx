import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TaskCard from "../components/TaskCard";

describe("TaskCard", () => {
  it("visar information om uppgiften", () => {
    render(
      <TaskCard
        title="Testuppgift"
        id={10}
        description="Testbeskrivning"
        assignee="Martin"
        category="Test"
        priority="Hög"
      />,
    );

    expect(screen.getByText("Titel: Testuppgift")).toBeInTheDocument();
    expect(screen.getByText("ID: 10")).toBeInTheDocument();
    expect(screen.getByText("Beskrivning: Testbeskrivning")).toBeInTheDocument();
    expect(screen.getByText("Ansvarig: Martin")).toBeInTheDocument();
    expect(screen.getByText("Kategori: Test")).toBeInTheDocument();
    expect(screen.getByText("Prioritet: Hög")).toBeInTheDocument();
  });
});
