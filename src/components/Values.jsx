import ApertureIcon from "../components/icons/ApertureIcon";
import AwardIcon from "../components/icons/AwardIcon";
import ClockIcon from "../components/icons/ClockIcon";
import ShieldIcon from "../components/icons/ShieldIcon";

export default function Values() {
  const content = [
    {
      icon: <ApertureIcon />,
      title: "Optical Excellence",
      description:
        "Each lens in our collection is selected for its optical character and the unique rendering it brings to an image."
    },
    {
      icon: <ClockIcon />,
      title: "Timeless Design",
      description:
        "From the Bauhaus-inspired lines of Leica to the industrial precision of Nikon, these cameras are objects of enduring beauty."
    },
    {
      icon: <AwardIcon />,
      title: "Historical Significance",
      description:
        "Every piece has a story, whether it traveled to the moon or taught millions their first exposure triangle."
    },
    {
      icon: <ShieldIcon />,
      title: "Built to Last",
      description:
        "Mechanical precision from an era when cameras were built for generations, not product cycles."
    }
  ];

  return (
    <>
      <div className="page-title">
        <p className="uppercase color-accent">About</p>
        <h1 className="playfair-font">Values</h1>
      </div>
      <div className="about-main-grid">
        {content.map((c) => (
          <div key={c.title} className="about-main-card">
            {c.icon}
            <h3 className="playfair-font">{c.title}</h3>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
