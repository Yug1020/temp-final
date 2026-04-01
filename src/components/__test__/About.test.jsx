import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import {About} from "../About"
import "@testing-library/jest-dom";

describe("These test are for practice and basic contact page testing", () => {

    it("it should test the imgae is loading or not", () => {
        render(<About></About>)

        const Image = screen.getByRole("img")

        expect(Image).toHaveAttitude("src", "https://avatars.githubusercontent.com/u/143815412?v=4")
    })
})