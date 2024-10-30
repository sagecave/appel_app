const IwatchHero = ({ imgNavn, imgBeskrivelse }) => {
  return (
    <div>
      <img src={imgNavn} alt={imgBeskrivelse} />
    </div>
  );
};

export default IwatchHero;
