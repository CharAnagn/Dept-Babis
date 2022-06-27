import { ClientsContainer, ClientHeader } from "../styles/clients/Clients.styled"
import { ClientLogos } from "../data/ClientLogos"

export const Clients = () => {
    return(
        <>
        <ClientHeader>
            <h1>Clients</h1>
            <p>We value a great working relationship with our clients above all else. It's why they often come to our parties. It's also why we're able to challenge and inspire them to reach for the stars.</p>
        </ClientHeader>
        <ClientsContainer>
            {ClientLogos && ClientLogos.map((clientLogo, index) =>(
                <img src={clientLogo} key={index} alt="" loading="lazy"/>
            ))}
        </ClientsContainer>
        </>
    )
}