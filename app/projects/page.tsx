import Image from 'next/image';
import {PageHero,CTA,Footer,ProjectCards} from '../components';
export const metadata={title:'Projects'};
const clientWork=[
  ['classic-kitchen','Classic shaker kitchen'],['green-kitchen','Green bespoke kitchen'],['home-office','Tailored home office'],
  ['classic-detail-01','Kitchen detail'],['classic-detail-02','Bespoke cabinetry'],['classic-detail-03','Finished interior detail']
];
export default function Projects(){return <main><PageHero eyebrow="Selected work" title="Spaces that speak for themselves." copy="A considered selection of bespoke interiors and recent LJM client work."/><section className="projectspage"><ProjectCards/><div className="clientWork"><div><p className="eyebrow">Recent LJM work</p><h2>Crafted for real homes.</h2></div><p>Selected photographs from completed LJM interiors, showing the care in our cabinetry, layouts and finishing details.</p><div className="clientGrid">{clientWork.map(([image,label])=><figure key={image}><Image src={`/images/client-projects/${image}.jpeg`} alt={label} fill sizes="(max-width:700px) 100vw, 33vw"/><figcaption>{label}</figcaption></figure>)}</div></div></section><CTA/><Footer/></main>}
