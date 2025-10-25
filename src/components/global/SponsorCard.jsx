const SponsorCard = ({ logo, name, tier = "default" }) => {
  const tierStyles = {
    platinum: "border-4 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 shadow-2xl scale-110",
    gold: "border-3 border-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 shadow-xl scale-105",
    silver: "border-2 border-gray-400 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-800/50 dark:to-slate-800/50 shadow-lg",
    default: "border-2 border-gray-300 bg-white dark:bg-gray-800 shadow-md"
  };

  return (
    <div className={`rounded-2xl p-6 w-full flex justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${tierStyles[tier]}`}>
      <img src={logo} alt={name} className="h-12 w-auto object-contain filter hover:brightness-110 transition-all duration-300" />
    </div>
  );
};
  
  export default SponsorCard;
