

import { render } from "@testing-library/react"
import { CreationBuget } from "../Components/AddBudget"


 describe("<Creation/>", () => {


    test("Should render " , () => {

         let b =9;

        render( <CreationBuget />  )

        expect(b).toBe(expect.any(Number))



    })


 })