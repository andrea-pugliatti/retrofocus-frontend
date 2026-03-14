import ShieldIcon from "../components/ShieldIcon";
import ApertureIcon from "../components/ApertureIcon";
import ClockIcon from "../components/ClockIcon";
import AwardIcon from "../components/AwardIcon";

export default function AboutUs() {
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

  const milestones = [
    {
      year: "1888",
      event:
        "The first practical roll-film cameras begin to appear, expanding photography beyond studio basements."
    },
    {
      year: "1900",
      event: "Kodak Brownie popularizes snapshot photography, bringing cameras into homes."
    },
    { year: "1907", event: "Autochrome Lumière brings color photography to mass audiences." },
    {
      year: "1925",
      event: "Affordable 35mm film fuels street photography and faster reportage traditions."
    },
    { year: "1935", event: "Compact cameras gain popularity among amateur photographers." },
    {
      year: "1959",
      event: "Nikon F popularizes the modern 35mm SLR for professionals and enthusiasts alike."
    },
    {
      year: "1965",
      event: "Unconventional designs and new materials push camera construction into new shapes."
    },
    {
      year: "1976",
      event: "Electronic exposure control becomes mainstream with user-friendly SLRs."
    },
    {
      year: "1984",
      event: "Early consumer digital imaging concepts begin to appear in professional circles."
    }
  ];

  return (
    <main className="container">
      <div className="page-title">
        <p className="uppercase color-accent">About</p>
        <h1 className="playfair-font">Why Vintage Matters</h1>
      </div>
      <div className="about-main">
        <p className="about-main-text">
          RetroFocus is a curated repository celebrating the cameras and lenses that defined modern
          photography. We believe in preserving the craftsmanship and engineering of an era when
          every frame counted.
        </p>
        <p className="about-main-text">
          A respectful look at the cameras, lenses and photographers that shaped imaging in the 19th
          and 20th centuries. Browse the iconic gear, learn about notable photographers, and explore
          milestones that steered the evolution of photography as an art and a profession.
        </p>
        <p className="about-main-text">
          What you'll find here: curated gear histories, biographical sketches of influential
          practitioners, and a lightweight timeline showing how techniques and technology evolved
          together.
        </p>
      </div>

      <div className="page-title">
        <p className="uppercase color-accent">About</p>
        <h1 className="playfair-font">Milestones</h1>
      </div>

      <div className="timeline">
        {milestones.map((m) => (
          <div key={m.year} className="timeline-item">
            <span className="playfair-font bold">{m.year}</span> - {m.event}
          </div>
        ))}
      </div>

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
    </main>
  );
}
