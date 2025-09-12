const PrimaryLoader = () => {
  return (
    <>
      <div className="custom-loader">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`line line-${i}`} />
        ))}
      </div>
    </>
  );
};

export default PrimaryLoader;
