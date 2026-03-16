import { browser } from '$app/environment';

type Theme = 'dark' | 'light';
type ThemePreference = Theme | 'system';

const STORAGE_KEY = 'theme';

// Get initial theme from localStorage or system preference
function getInitialTheme(): Theme {
	if (!browser) return 'dark';

	const stored = localStorage.getItem(STORAGE_KEY);
	
	if (stored === 'light') return 'light';
	if (stored === 'dark') return 'dark';
	
	const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	return systemPrefersDark ? 'dark' : 'light';
}

// Sync theme to DOM only
function syncTheme(themeValue: Theme) {
	if (browser) {
		// Remove all theme attributes first
		document.documentElement.removeAttribute('data-theme');
		
		// Apply current theme (light uses data-theme, dark is default)
		if (themeValue === 'light') {
			document.documentElement.setAttribute('data-theme', 'light');
		}
	}
}

// Listen for system theme changes
if (browser) {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
		const stored = localStorage.getItem(STORAGE_KEY);
		// Only update if user hasn't explicitly set a preference
		if (stored !== 'light' && stored !== 'dark') {
			currentTheme = e.matches ? 'dark' : 'light';
			syncTheme(currentTheme);
		}
	});
}

let currentTheme = $state<Theme>(getInitialTheme());

// Initialize theme on first load
syncTheme(currentTheme);

export const theme = {
	get value(): Theme {
		return currentTheme;
	},
	set(value: Theme) {
		currentTheme = value;
		syncTheme(value);
		if (browser) {
			localStorage.setItem(STORAGE_KEY, value);
		}
	},
	toggle() {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		currentTheme = newTheme;
		syncTheme(newTheme);
		if (browser) {
			localStorage.setItem(STORAGE_KEY, newTheme);
		}
	},
	resetToSystem() {
		if (browser) {
			localStorage.removeItem(STORAGE_KEY);
			const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			currentTheme = systemPrefersDark ? 'dark' : 'light';
			syncTheme(currentTheme);
		}
	},
	get label(): string {
		return currentTheme === 'dark' ? 'Olive Dark' : 'Olive Light';
	}
};
