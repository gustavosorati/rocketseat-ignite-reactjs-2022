import { SummaryContainer, HeaderContent } from "./styles";
import logo from '../../assets/logo.svg'


export function Summary() {
    return (
        <SummaryContainer>
            <HeaderContent>
                <img src={logo} alt="" />

                <button>Nova Transação</button>
            </HeaderContent>
        </SummaryContainer>
    )
}