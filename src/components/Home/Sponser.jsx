import { IMAGES } from "../../assets/Images";
import AnimatedContent from "../gsap/AnimatedContent";
import LogoSlider from "../lightswind/sliding-logo-marquee";


const logos = [
  {
    id: "1",
    content: <img src={IMAGES.HABBALOGO} alt="logo" className="h-16 md:h-20" />,
    href: "https://example.com",
  },
  {
    id: "2",
    content: <img src={IMAGES.HABBALOGO} alt="logo" className="h-16 md:h-20" />,
    href: "https://example.com",
  },
  {
    id: "3",
    content: <img src={IMAGES.HABBALOGO} alt="logo" className="h-16 md:h-20" />,
    href: "https://example.com",
  },
  {
    id: "4",
    content: <img src={IMAGES.HABBALOGO} alt="logo" className="h-16 md:h-20" />,
    href: "https://example.com",
  },
  {
    id: "5",
    content: <img src={IMAGES.HABBALOGO} alt="logo" className="h-16 md:h-20" />,
    href: "https://example.com",
  },
  {
    id: "6",
    content: <img src={IMAGES.HABBALOGO} alt="logo" className="h-16 md:h-20" />,
    href: "https://example.com",
  },
];

export default function Sponsor() {
  return (
<div className="w-full py-32">
<AnimatedContent distance={70} direction="vertical" reverse={false} duration={1}  ease="power3.out"  initialOpacity={0} animateOpacity  scale={1}  threshold={0.2}  delay={0.3}>
      <LogoSlider
        backgroundImage="https://example.com/background.jpg"
        logos={logos}
      />
      </AnimatedContent>
    </div>
  );
}
