import { type MouseEvent, type RefObject, useEffect, useRef } from 'react';

type ModalDialog = {
	dialogRef: RefObject<HTMLDialogElement>;
	handleBackdropClick: (event: MouseEvent<HTMLDialogElement>) => void;
};

/**
 * Keeps a native <dialog> in sync with `isOpen`, opening it as a modal so it gets a backdrop, focus trapping and
 * Escape-to-close. Pass `onClose` to the dialog's `onClose` too, so closing with Escape updates `isOpen`.
 */
export function useModalDialog(isOpen: boolean, onClose: () => void): ModalDialog {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const dialog = dialogRef.current;

		if (!dialog) {
			return;
		}

		if (isOpen && !dialog.open) {
			dialog.showModal();
		}

		if (!isOpen && dialog.open) {
			dialog.close();
		}
	}, [isOpen]);

	// A click that lands on the <dialog> itself (not its inner panel) is a click on the backdrop.
	const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	return { dialogRef, handleBackdropClick };
}
