import { render } from "@testing-library/react";
import Grocery from "../Grocery";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("it should check weather grocery page is load or not", () => {
    render(<Grocery></Grocery>)

    const groceryText = screen.getByText("Grocery is as big app as food. so trying lazy loading on this app")

    // process 1
    // expect(groceryText).toBeTruthy()
    // process 2
    expect(groceryText).toBeInTheDocument()

    // both the process work same
})