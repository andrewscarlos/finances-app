import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImgfrom from "../../assets/total.svg";
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas </p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas </p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total </p>
          <img src={totalImgfrom} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
