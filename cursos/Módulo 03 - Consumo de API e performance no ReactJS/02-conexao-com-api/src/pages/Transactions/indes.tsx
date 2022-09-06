import { useEffect, useState } from "react";
import { Header } from "../../components/Header/indes";
import { Summary } from "../../components/Summary/indes";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
  }


export function Transactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        // fetch('http://localhost:3000/transactions')
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //     })

        async function loadTransactions() {
            const response = await fetch('http://localhost:3000/transactions');
            const data = await response.json();

            setTransactions(data);
        }
        loadTransactions()
    }, [])


    return (
        <div>
            <Header />

            <Summary />

            
            <TransactionsContainer>
                <SearchForm />
                
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighlight variant="income">
                                            {transaction.price}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.category}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}