import { ClientQuoteContainer } from "../styles/clientQuotes/ClientQuotes.styled"

export const ClientQuotes = (props) => {
    return(
        <>
            <ClientQuoteContainer>
                <h2>{props.quote}</h2>
                <p>{props.name}</p>
            </ClientQuoteContainer>
        </>
    )
}