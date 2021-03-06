import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outIncome from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { useTransactions } from "../hooks/UseTransactions";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const { createTransaction } = useTransactions();

  async function handleNewTransactions(ev: FormEvent) {
    ev.preventDefault();
    await createTransaction({
      title,
      amount,
      type,
      category,
    });
    setTitle("");
    setCategory("");
    setAmount(0);
    setType("deposit");

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleNewTransactions}>
        <h2>Cadastrar Transação</h2>
        <input
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          placeholder="Título"
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(ev) => setAmount(+ev.target.value)}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            className={type === "deposit" ? "active" : ""}
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outIncome} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(ev) => setCategory(ev.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
