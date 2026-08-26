function normalizeBase(base: string): string {
	return base.endsWith('/') ? base : `${base}/`;
}

/** Prefix internal paths with the site base (GitHub Pages project path). */
export function withBase(path: string): string {
	if (path.startsWith('http://') || path.startsWith('https://')) {
		return path;
	}
	const base = normalizeBase(import.meta.env.BASE_URL);
	if (path === '/' || path === '') {
		return base;
	}
	const normalized = path.startsWith('/') ? path.slice(1) : path;
	return `${base}${normalized}`;
}
