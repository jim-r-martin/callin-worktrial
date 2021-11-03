import MetaTitle from "../shared/MetaTitle";
import EpisodesList from "./EpisodesList";
import CategoriesList from "../shared/CategoriesList";
import UsersList from "../shared/UsersList";
import {
  ContentHeader,
  ContentContainer,
  ContentLeftCol,
  ContentRightCol,
  SectionContainer,
  Section,
  Divider,
} from "../shared/Presentation";
import { formatSubscribersStr, formatEpisodesStr } from "../../helpers/format";

export default function ShowPage({ show = {}, errors }) {
  return (
    <div>
      <MetaTitle title={show.title} />
      <ContentHeader headerText="Show Preview" />
      <Divider />
      <ContentContainer>
        <ContentLeftCol>
          <SectionContainer>
            <Section classes="image-container">
              <img
                className="profile-photo"
                src={show.photo}
                alt={`${show.title}`}
              />
            </Section>
            <Section classes="counts">
              {`${formatSubscribersStr(
                show.subscribesCount
              )}  •  ${formatEpisodesStr(show.episodes.length)}`}
            </Section>
          </SectionContainer>
          <Divider />
          <SectionContainer classes="description">
            <Section>{show.description}</Section>
          </SectionContainer>
        </ContentLeftCol>
        <ContentRightCol>
          <SectionContainer>
            <Section>
              <span className="title">{show.title}</span>
            </Section>
            <Section>
              <CategoriesList categorizations={show.categorizations} />
            </Section>
          </SectionContainer>
          <Divider />
          <SectionContainer>
            <Section>
              <b>Hosts</b>
            </Section>
            <Section>
              <UsersList users={show.hosts} />
            </Section>
          </SectionContainer>
          <EpisodesList episodes={show.episodes} />
        </ContentRightCol>
      </ContentContainer>
    </div>
  );
}
