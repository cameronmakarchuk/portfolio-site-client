import { useEffect } from 'react';
import { profile } from '../data/portfolio';

// Matches the <title> in index.html, which is what link previews and the first page load show.
const siteTitle = `${profile.name} | Software Developer`;

/** Sets the browser tab title for a page, e.g. "RecLeague · Cameron Makarchuk". Omit `pageName` for the home page. */
export function useDocumentTitle(pageName?: string): void {
	useEffect(() => {
		document.title = pageName ? `${pageName} · ${profile.name}` : siteTitle;
	}, [pageName]);
}
