import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {  PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return(
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website Development</td>
              <td width="50%">
                <PriceHighlight variant="income">
                  $12,000.00
                </PriceHighlight>
              </td>
              <td width="50%">Sale</td>
              <td width="50%">04/13/2024</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td width="50%">
                <PriceHighlight variant="outcome">
                  -$59.00
                </PriceHighlight>
              </td>
              <td width="50%">Food</td>
              <td width="50%">04/10/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}