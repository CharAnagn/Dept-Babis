import {
  ScaledCardRightContainer,
  ScaledClientCardRight,
  ScaledClientCardLeft,
} from "../styles/clientCards/ScaledCardRight.styled";
import { ClientCardContent } from "../styles/clientCards/ClientCard.styled";

export const ScaledCardRight = (props) => {
  return (
    <>
      <ScaledCardRightContainer>
        <ScaledClientCardLeft>
          <p>{props.clientNameLeft1}</p>
          <h1>{props.projectDescriptionLeft1}</h1>
          <a href={props.href1}> Read more</a>
          <hr />
          <p>{props.clientNameLeft2}</p>
          <h1>{props.projectDescriptionLeft2}</h1>
          <a href={props.href2}> Read more</a>
          <hr />
          <p>{props.clientNameLeft3}</p>
          <h1>{props.projectDescriptionLeft3}</h1>
          <a href={props.href3}> Read more</a>
        </ScaledClientCardLeft>
        <ScaledClientCardRight>
          <ClientCardContent>
            <p>{props.clientNameRight}</p>
            <h1>{props.projectDescriptionRight}</h1>
            <a href={props.href}> Read more</a>
          </ClientCardContent>
          <img src={props.imageRight} alt={props.altTextRight} loading="lazy"/>
        </ScaledClientCardRight>
      </ScaledCardRightContainer>
    </>
  );
};
