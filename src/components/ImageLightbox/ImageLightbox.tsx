import { useState } from 'react';
import type { ImageMedia } from '../../data/projects';
import { useModalDialog } from '../../hooks/useModalDialog';
import { MediaFrame, type MediaFrameSize } from '../MediaFrame/MediaFrame';
import './ImageLightbox.scss';

type ImageLightboxProps = {
	image: ImageMedia;
	size: MediaFrameSize;
};

/** A framed image that opens full size in a modal when clicked. */
export function ImageLightbox({ image, size }: ImageLightboxProps): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const closeLightbox = () => setIsOpen(false);
	const { dialogRef, handleBackdropClick } = useModalDialog(isOpen, closeLightbox);

	return (
		<>
			<button
				type='button'
				className='image-lightbox__trigger'
				aria-haspopup='dialog'
				aria-label={`Enlarge image: ${image.alt}`}
				onClick={() => setIsOpen(true)}
			>
				<MediaFrame media={image} size={size} />
			</button>

			{/* biome-ignore lint/a11y/useKeyWithClickEvents: backdrop click is a mouse shortcut; keyboard users close with Escape or the close button. */}
			<dialog
				ref={dialogRef}
				className='image-lightbox'
				aria-label={image.alt}
				onClose={closeLightbox}
				onClick={handleBackdropClick}
			>
				<figure className='image-lightbox__figure'>
					<img className='image-lightbox__image' src={image.src} alt={image.alt} />
					<figcaption className='image-lightbox__caption'>{image.alt}</figcaption>
				</figure>
				<button
					type='button'
					className='image-lightbox__close'
					aria-label='Close image'
					onClick={closeLightbox}
				>
					×
				</button>
			</dialog>
		</>
	);
}
