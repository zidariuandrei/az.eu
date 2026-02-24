import { browser } from '$app/environment';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

// Get initial theme from localStorage or system preference
function getInitialTheme(): Theme {
	if (!browser) return 'dark';

	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'light') return 'light';
	if (stored === 'dark') return 'dark';

	return 'dark';
}

// Sync theme to DOM and localStorage
function syncTheme(themeValue: Theme) {
	if (browser) {
		// Remove all theme attributes first
		document.documentElement.removeAttribute('data-theme');
		
		// Apply current theme (light uses data-theme, dark is default)
		if (themeValue === 'light') {
			document.documentElement.setAttribute('data-theme', 'light');
		}
		localStorage.setItem(STORAGE_KEY, themeValue);
	}
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
	},
	toggle() {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		currentTheme = newTheme;
		syncTheme(newTheme);
	},
	get label(): string {
		return currentTheme === 'dark' ? 'Olive Dark' : 'Olive Light';
	}
};
