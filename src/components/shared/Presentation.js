const ContentContainer = ({ children, classes = "" }) => (
  <div className={`view-content-container ${classes}`}>{children}</div>
);

const ContentLeftCol = ({ children, classes = "" }) => (
  <div className={`content-col content-left-col ${classes}`}>{children}</div>
);

const ContentRightCol = ({ children, classes = "" }) => (
  <div className={`content-col content-right-col ${classes}`}>{children}</div>
);

const SectionContainer = ({ children, classes = "" }) => (
  <div className={`view-section-container ${classes}`}>{children}</div>
);

const Section = ({ children, classes = "" }) => (
  <div className={`view-section ${classes}`}>{children}</div>
);

const Divider = ({ classes = "" }) => <hr className={`divider ${classes}`} />;

export {
  ContentContainer,
  ContentLeftCol,
  ContentRightCol,
  SectionContainer,
  Section,
  Divider,
};
