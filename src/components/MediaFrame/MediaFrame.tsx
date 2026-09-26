import type { Media } from '../../data/projects';
import './MediaFrame.scss';

export type MediaFrameSize = 'feature' | 'card' | 'hero' | 'detail';

type MediaFrameProps = {
	media: Media;
	size: MediaFrameSize;
};

export function MediaFrame({ media, size }: MediaFrameProps): JSX.Element {
	if (media.kind === 'placeholder') {
		return <div className={`media-frame media-frame--${size} media-frame--placeholder`}>{media.label}</div>;
	}

	return (
		<div className={`media-frame media-frame--${size}`}>
			<img className='media-frame__image' src={media.src} alt={media.alt} />
		</div>
	);
}
