import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImgfrom from "../../assets/total.svg";
import { useTransactions } from "../hooks/UseTransactions";
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposit += transaction.amount;
        acc.total += transaction.amount;
      }
      if (transaction.type === "withdraw") {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposit: 0,
      withdraws: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <div>
        <header>
          <p>Entradas </p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>R${summary.deposit}</strong>
      </div>
      <div>
        <header>
          <p>Saídas </p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>-R${summary.withdraws}</strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total </p>
          <img src={totalImgfrom} alt="" />
        </header>
        <strong>R${summary.total}</strong>
      </div>
    </Container>
  );
}
