import { ClientCard } from "../clientCards/ClientCard";
import { ClientData as cd } from "../data/ClientData";
import { ScaledCardLeft } from "../clientCards/ScaledCardLeft";
import { ScaledCardRight } from "../clientCards/ScaledCardRight";
import { ClientQuotes } from "../clientQuotes/ClientQuotes";
import { Clients } from "../clients/Clients";
import { Form } from "../form/FormSection";

import { ShowMeWork } from "../styles/sections/HomeSection.styled";

export const HomeSection = () => {
  return (
    <>
      <ShowMeWork>
        <p>Show me <a href="#work">all work</a></p>
        
        <p>in <a href="#work">in all industries</a></p>
      </ShowMeWork>
      <ClientCard
        clientNameLeft={cd.bol.name}
        projectDescriptionLeft={cd.bol.description}
        imageLeft={cd.bol.image}
        clientNameRight={cd.kempen.name}
        projectDescriptionRight={cd.kempen.description}
        imageRight={cd.kempen.image}
      />
      <ClientCard
        clientNameLeft={cd.philips.name}
        projectDescriptionLeft={cd.philips.description}
        imageLeft={cd.philips.image}
        clientNameRight={cd.gemeentmuseum.name}
        projectDescriptionRight={cd.gemeentmuseum.description}
        imageRight={cd.gemeentmuseum.image}
      />
      <ScaledCardLeft
        clientNameLeft={cd.florensis.name}
        projectDescriptionLeft={cd.florensis.description}
        imageLeft={cd.florensis.image}
        clientNameRight1={cd.microsoft.name}
        projectDescriptionRight1={cd.microsoft.description}
        clientNameRight2={cd.oneill.name}
        projectDescriptionRight2={cd.oneill.description}
        clientNameRight3={cd.microsoft.name}
        projectDescriptionRight3={cd.microsoft.description}
      />
      <ClientCard
        clientNameLeft={cd.belighting.name}
        projectDescriptionLeft={cd.belighting.description}
        imageLeft={cd.belighting.image}
        clientNameRight={cd.tui.name}
        projectDescriptionRight={cd.tui.description}
        imageRight={cd.tui.image}
      />
      <ScaledCardRight
        clientNameLeft1={cd.amazon.name}
        projectDescriptionLeft1={cd.amazon.description}
        clientNameLeftt2={cd.oneill.name}
        projectDescriptionLeft2={cd.oneill.description}
        clientNameleft3={cd.microsoft.name}
        projectDescriptionLeft3={cd.microsoft.description}
        clientNameRight={cd.florensis.name}
        projectDescriptionRight={cd.florensis.description}
        imageRight={cd.florensis.image}
      />
      <ClientCard
        clientNameLeft={cd.chocomel.name}
        projectDescriptionLeft={cd.chocomel.description}
        imageLeft={cd.chocomel.image}
        clientNameRight={cd.jbl.name}
        projectDescriptionRight={cd.jbl.description}
        imageRight={cd.jbl.image}
      />
      <ClientCard
        clientNameLeft={cd.zalando.name}
        projectDescriptionLeft={cd.zalando.description}
        imageLeft={cd.zalando.image}
        clientNameRight={cd.konink.name}
        projectDescriptionRight={cd.konink.description}
        imageRight={cd.konink.image}
      />
      <ClientQuotes
        quote='"Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of the 60% growth in online booking in just one month"'
        name="Mattijs ten drink - ceo, transavia"
      />
      <ClientCard
        clientNameLeft={cd.liberty.name}
        projectDescriptionLeft={cd.liberty.description}
        imageLeft={cd.liberty.image}
        clientNameRight={cd.arla.name}
        projectDescriptionRight={cd.arla.description}
        imageRight={cd.arla.image}
      />
      <Clients />
    <Form/>
    
    </>
  );
};
