const SectionTitle = ({ title }) => {
  return (
    <div className="text-center my-10 w-1/4 mx-auto">
      <h3 className="lg:text-3xl border-y-4 py-2 font-semibold">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
