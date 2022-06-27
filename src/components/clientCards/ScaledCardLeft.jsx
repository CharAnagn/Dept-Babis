import {
  ScaledCardLeftContainer,
  ScaledClientCardLeft,
  ScaledClientCardRight,
} from "../styles/clientCards/ScaledCardLeft.styled";
import { ClientCardContent } from "../styles/clientCards/ClientCard.styled";

export const ScaledCardLeft = (props) => {
  return (
    <>
      <ScaledCardLeftContainer>
        <ScaledClientCardLeft>
          <ClientCardContent>
            <p>{props.clientNameLeft}</p>
            <h1>{props.projectDescriptionLeft}</h1>
            <a href={props.href}> Read more</a>
          </ClientCardContent>
          <img src={props.imageLeft} alt={props.altTextLeft} loading="lazy" />
        </ScaledClientCardLeft>
        <ScaledClientCardRight>
          <p>{props.clientNameRight1}</p>
          <h1>{props.projectDescriptionRight1}</h1>
          <a href={props.href1}> Read more</a>
          <hr />
          <p>{props.clientNameRight2}</p>
          <h1>{props.projectDescriptionRight2}</h1>
          <a href={props.href2}> Read more</a>
          <hr />
          <p>{props.clientNameRight3}</p>
          <h1>{props.projectDescriptionRight3}</h1>
          <a href={props.href2}> Read more</a>
        </ScaledClientCardRight>
      </ScaledCardLeftContainer>
    </>
  );
};
