// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    
    // Check demo todos
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Master JavaScript")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Enter new todo");
    const addButton = screen.getByText("Add");

    // Type into input and click Add
    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(addButton);

    // Check new todo appears
    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  test("toggles a todo item", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    expect(todoItem).not.toHaveClass("line-through"); // Initially not completed

    // Click to toggle
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("line-through"); // Now completed
  });

  test("deletes a todo item", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Build a Todo App");
    const deleteButton = screen.getAllByText("Delete")[1]; // Second todo’s delete button

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument(); // Removed from DOM
  });
});
