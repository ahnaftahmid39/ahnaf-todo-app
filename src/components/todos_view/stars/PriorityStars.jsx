const PriorityStars = ({ priority = 5, className }) => {
  let stars = [];
  for (let i = 0; i < priority; i++) {
    stars.push("⭐");
  }
  return <span className={className}>{stars.join(" ")}</span>;
};

export default PriorityStars;
