const ContentHeader = ({ headerText }) => (
  <div className="header">
    <span className="callin-red">
      <b>Callin</b>
    </span>{" "}
    <span>{headerText}</span>
  </div>
);

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

const ImageBackground = ({ classes = "" }) => (
  <div className={`abs-pos-img-bkg ${classes}`} />
);

const Divider = ({ classes = "" }) => <hr className={`divider ${classes}`} />;

export {
  ContentHeader,
  ContentContainer,
  ContentLeftCol,
  ContentRightCol,
  SectionContainer,
  Section,
  ImageBackground,
  Divider,
};
