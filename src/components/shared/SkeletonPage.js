import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  ContentHeader,
  ContentContainer,
  ContentLeftCol,
  ContentRightCol,
  SectionContainer,
  Section,
  Divider,
} from "./Presentation";

export default function SkeletonPage({ headerText }) {
  return (
    <div>
      <ContentHeader headerText={headerText} />
      <Divider />
      <ContentContainer>
        <ContentLeftCol>
          <SectionContainer>
            <Section classes="image-container">
              <Skeleton
                className="abs-pos-img show-photo"
                style={{ position: "absolute", borderRadius: "5%" }}
              />
            </Section>
            <Section>
              <Skeleton />
            </Section>
          </SectionContainer>
        </ContentLeftCol>
        <ContentRightCol>
          <SectionContainer>
            <Section>
              <Skeleton height={30} width="50%" />
            </Section>
            <Section>
              <div>
                <ul className="view-list categories-list">
                  {Array(3)
                    .fill()
                    .map((item, index) => (
                      <li className="view-list-item" key={index}>
                        <Skeleton height={36} width={100} />
                      </li>
                    ))}
                </ul>
              </div>
            </Section>
          </SectionContainer>
          <Divider />
          <SectionContainer>
            <Section>
              <Skeleton width={100} />
            </Section>
            <Section>
              <div>
                <ul className="view-list users-list">
                  {Array(3)
                    .fill()
                    .map((item, index) => (
                      <li className="view-list-item" key={index}>
                        <div className="user-container">
                          <Skeleton height={72} width={72} circle />
                          <div style={{ marginTop: "6px" }}>
                            <Skeleton width={50} style={{ margin: "0 11px" }} />
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </Section>
          </SectionContainer>
          <Divider />
          <SectionContainer>
            <Section>
              <Skeleton count={3} style={{ margin: "6px 0" }} />
            </Section>
          </SectionContainer>
        </ContentRightCol>
      </ContentContainer>
    </div>
  );
}
