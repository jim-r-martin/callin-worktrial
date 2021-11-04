import { Link } from "react-router-dom";
import { useShowPath } from "../hooks/useRelPaths";
import MetaTitle from "../shared/MetaTitle";
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
import { formatDate, formatRunTime } from "../../helpers/format";

export default function EpisodePage({ episode = {}, errors }) {
  const showLinkPath = useShowPath(episode);

  return (
    <div>
      <MetaTitle title={episode.title} />
      <ContentHeader headerText="Episode Preview" />
      <Divider />
      <ContentContainer>
        <ContentLeftCol>
          <SectionContainer>
            <Section classes="image-container">
              <ImageBackground classes="show-photo" />
              <ImageFadeIn
                classes="abs-pos-img show-photo"
                src={episode.show.photo}
                alt={`${episode.show.title}`}
              />
            </Section>
            <Section classes="meta-text steel-text elips-overflow hide-on-mobile">
              {`${formatDate(episode.publishedAt)}  •  ${formatRunTime(
                episode.runtime
              )}`}
            </Section>
          </SectionContainer>
        </ContentLeftCol>
        <ContentRightCol>
          <SectionContainer classes="zero-top-mgn-on-mobile">
            <Section classes="small-margin">
              <span className="title">{episode.title}</span>
            </Section>
            <Section>
              <Link to={showLinkPath}>
                <div className="elips-overflow callin-red body-text undline-hvr">
                  {episode.show.title}
                </div>
              </Link>
            </Section>
            <Section classes="meta-text steel-text elips-overflow show-on-mobile neg-8-top-margin">
              {`${formatDate(episode.publishedAt)}  •  ${formatRunTime(
                episode.runtime
              )}`}
            </Section>
            <Section>
              <CategoriesList categorizations={episode.show.categorizations} />
            </Section>
          </SectionContainer>
          <Divider />
          <SectionContainer>
            <Section>
              <b>Speakers</b>
            </Section>
            <Section>
              <UsersList users={episode.speakers} />
            </Section>
          </SectionContainer>
          <Divider />
          <SectionContainer classes="description">
            <Section>{episode.description}</Section>
          </SectionContainer>
        </ContentRightCol>
      </ContentContainer>
    </div>
  );
}
