const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="rounded-3xl border border-[#E5DDD3] bg-[#FFFDF9] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#4B5563] dark:bg-[#374151]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D9E5D6] text-[#2F3A32] dark:bg-[#4B5563] dark:text-[#F9FAFB]">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[#2F3A32] dark:text-[#F9FAFB]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#2F3A32]/75 dark:text-[#F9FAFB]/80">{description}</p>
    </div>
  );
};

export default FeatureCard;
