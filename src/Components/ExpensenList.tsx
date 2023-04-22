import { Budgets } from "../Contex/AppContex"
export function ExpensesList() {


  let bugetStorage: string | null = localStorage.getItem("budgets")
  let parsedB: Budgets[] = JSON.parse(bugetStorage!)

  return (
    <>
      <table>
      <div>
      <thead>
          <tr>
            <td>id</td>
            <td>name</td>
          </tr>
        </thead>
        <tbody> 
          <div>
            <ul>
              {
                parsedB.map(b => (
                  <li key={b.id}>{b.name}</li>
                ))
              }
            </ul>
          </div>
        </tbody>
      </div>
      </table>
    </>
  )


}