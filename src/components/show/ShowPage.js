import DocHeaderTags from "../shared/DocHeaderTags";
import EpisodesList from "./EpisodesList";
import CategoriesList from "../shared/CategoriesList";
import UsersList from "../shared/UsersList";
import ImageFadeIn from "../shared/ImageFadeIn";
import {
  ContentHeader,
  ContentContainer,
  ContentLeftCol,
  ContentRightCol,
  SectionContainer,
  Section,
  Divider,
  ImageBackground,
} from "../shared/Presentation";
import { formatSubscribersStr, formatEpisodesStr } from "../../helpers/format";

export default function ShowPage({ show = {} }) {
  return (
    <div>
      <DocHeaderTags title={show.title} description={show.description} />
      <ContentHeader headerText="Show Preview" />
      <Divider />
      <ContentContainer>
        <ContentLeftCol>
          <SectionContainer>
            <Section classes="image-container">
              <ImageBackground classes="show-photo" />
              <ImageFadeIn
                classes="abs-pos-img show-photo"
                src={show.photo}
                alt={`${show.title}`}
              />
            </Section>
            <Section classes="show-on-mobile small-margin">
              <span className="title">{show.title}</span>
            </Section>
            <Section classes="elips-overflow body-text steel-text">
              {`${formatSubscribersStr(
                show.subscribesCount
              )}  •  ${formatEpisodesStr(show.episodes.length)}`}
            </Section>
          </SectionContainer>
          <Divider classes="hide-on-mobile" />
          <SectionContainer classes="description hide-on-mobile">
            <Section>{show.description}</Section>
          </SectionContainer>
        </ContentLeftCol>
        <ContentRightCol>
          <SectionContainer>
            <Section classes="hide-on-mobile">
              <span className="title">{show.title}</span>
            </Section>
            <Section classes="show-on-mobile">{show.description}</Section>
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
