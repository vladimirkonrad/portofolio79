import Image from 'next/image';
import { WorkContainer } from './WorkContainer';
import { WorkLeft } from './WorkLeft';
import { WorkRight } from './WorkRight';
import { WorkTile } from './workTiles';

interface WorkContentProps {
  work: WorkTile;
  progress?: number;
}

export default function WorkContent({ work, progress = 0 }: WorkContentProps) {
  const { title, description, long_description, image } = work;

  return (
    <WorkContainer>
      <WorkLeft progress={progress}>
        <div className="text-4xl font-medium md:text-3xl xl:text-4xl">{description}</div>
        <span className="text-2xl font-bold tracking-tight md:text-5xl xl:text-6xl">{title}</span>
        <div className="text-2xl font-bold tracking-tight md:text-2xl xl:text-2xl">
          {/* Placeholder for edit_1 content */}
          {long_description}
          {/* Placeholder for edit_2 content */}
        </div>
      </WorkLeft>
      <WorkRight progress={progress}>
        <div className="drop-shadow-2xl sm:mt-20 md:mt-24">
          <Image src={image.src} alt={title} width={image.width} height={image.height} />
        </div>
      </WorkRight>
    </WorkContainer>
  );
}
