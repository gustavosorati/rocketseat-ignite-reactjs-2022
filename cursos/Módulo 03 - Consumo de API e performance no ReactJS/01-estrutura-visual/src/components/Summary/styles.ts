import styled from "styled-components";


export const SummaryContainer = styled.section`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -5rem;

    background-color: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
    
`

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme["white"]};
    font-weight: bold;
    padding: 0 1.125rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme["green-700"]};
        transition: background-color .2s;
    }
`
