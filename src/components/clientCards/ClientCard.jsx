import {
  ClientCardContainer,
  ClientCardLeft,
  ClientCardRight,
  ClientCardContent,
} from "../styles/clientCards/ClientCard.styled";

export const ClientCard = (props) => {
  return (
    <>
      <ClientCardContainer>
        <ClientCardLeft>
          <ClientCardContent>
            <p>{props.clientNameLeft}</p>
            <h1>{props.projectDescriptionLeft}</h1>
            <a href={props.href}> Read more</a>
          </ClientCardContent>
          <img src={props.imageLeft} alt={props.altTextLeft} loading="lazy"/>
        </ClientCardLeft>
        <ClientCardRight>
          <ClientCardContent>
            <p>{props.clientNameRight}</p>
            <h1>{props.projectDescriptionRight}</h1>
            <a href={props.href}> Read more</a>
          </ClientCardContent>
          <img src={props.imageRight} alt={props.altTextRight} loading="lazy"/>
        </ClientCardRight>
      </ClientCardContainer>
    </>
  );
};
