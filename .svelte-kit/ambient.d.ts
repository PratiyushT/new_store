
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_CONFIG_DIR: string;
	export const FONTS_DIR: string;
	export const XDG_VIDEOS_DIR: string;
	export const XDG_SEAT_PATH: string;
	export const MAIL: string;
	export const GDK_SCALE: string;
	export const FORCE_COLOR: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const THEMES_DIR: string;
	export const PATH: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const LOGNAME: string;
	export const QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
	export const XDG_BACKEND: string;
	export const XDG_DOWNLOAD_DIR: string;
	export const WAYLAND_DISPLAY: string;
	export const XDG_PUBLICSHARE_DIR: string;
	export const XDG_SESSION_ID: string;
	export const XDG_CACHE_HOME: string;
	export const HYDE_THEME: string;
	export const npm_config_color: string;
	export const MOTD_SHOWN: string;
	export const XDG_STATE_HOME: string;
	export const LOCKSCREEN: string;
	export const XDG_SEAT: string;
	export const HYPRLAND_CMD: string;
	export const confDir: string;
	export const XDG_VTNR: string;
	export const XDG_DOCUMENTS_DIR: string;
	export const hashMech: string;
	export const XDG_SESSION_DESKTOP: string;
	export const hydeConfDir: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const dcolDir: string;
	export const cacheDir: string;
	export const iconsDir: string;
	export const SHLVL: string;
	export const XDG_DATA_DIRS: string;
	export const SHELL: string;
	export const DEBUG_COLORS: string;
	export const enableWallDcol: string;
	export const XDG_SESSION_CLASS: string;
	export const COLORTERM: string;
	export const ELECTRON_OZONE_PLATFORM_HINT: string;
	export const DISPLAY: string;
	export const HOME: string;
	export const WGETRC: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const DEBUGINFOD_URLS: string;
	export const XDG_PICTURES_DIR: string;
	export const ICONS_DIR: string;
	export const HYDE_CACHE_HOME: string;
	export const MOCHA_COLORS: string;
	export const XDG_MUSIC_DIR: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const LANG: string;
	export const HYDE_STATE_HOME: string;
	export const themesDir: string;
	export const HYDE_DATA_HOME: string;
	export const XDG_DESKTOP_DIR: string;
	export const HYDE_CONFIG_HOME: string;
	export const hypr_width: string;
	export const XDG_CONFIG_HOME: string;
	export const XDG_RUNTIME_DIR: string;
	export const OLDPWD: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const hypr_border: string;
	export const QT_QPA_PLATFORM: string;
	export const fontsDir: string;
	export const HYDE_THEME_DIR: string;
	export const DESKTOP_SESSION: string;
	export const HYDE_RUNTIME_DIR: string;
	export const USER: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const thmbDir: string;
	export const XDG_SESSION_TYPE: string;
	export const TERMINAL: string;
	export const XDG_DATA_HOME: string;
	export const XDG_TEMPLATES_DIR: string;
	export const PWD: string;
	export const _: string;
	export const SCREENRC: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		XDG_SESSION_PATH: string;
		XDG_CONFIG_DIR: string;
		FONTS_DIR: string;
		XDG_VIDEOS_DIR: string;
		XDG_SEAT_PATH: string;
		MAIL: string;
		GDK_SCALE: string;
		FORCE_COLOR: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		THEMES_DIR: string;
		PATH: string;
		MOZ_ENABLE_WAYLAND: string;
		LOGNAME: string;
		QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
		XDG_BACKEND: string;
		XDG_DOWNLOAD_DIR: string;
		WAYLAND_DISPLAY: string;
		XDG_PUBLICSHARE_DIR: string;
		XDG_SESSION_ID: string;
		XDG_CACHE_HOME: string;
		HYDE_THEME: string;
		npm_config_color: string;
		MOTD_SHOWN: string;
		XDG_STATE_HOME: string;
		LOCKSCREEN: string;
		XDG_SEAT: string;
		HYPRLAND_CMD: string;
		confDir: string;
		XDG_VTNR: string;
		XDG_DOCUMENTS_DIR: string;
		hashMech: string;
		XDG_SESSION_DESKTOP: string;
		hydeConfDir: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		dcolDir: string;
		cacheDir: string;
		iconsDir: string;
		SHLVL: string;
		XDG_DATA_DIRS: string;
		SHELL: string;
		DEBUG_COLORS: string;
		enableWallDcol: string;
		XDG_SESSION_CLASS: string;
		COLORTERM: string;
		ELECTRON_OZONE_PLATFORM_HINT: string;
		DISPLAY: string;
		HOME: string;
		WGETRC: string;
		XDG_CURRENT_DESKTOP: string;
		DEBUGINFOD_URLS: string;
		XDG_PICTURES_DIR: string;
		ICONS_DIR: string;
		HYDE_CACHE_HOME: string;
		MOCHA_COLORS: string;
		XDG_MUSIC_DIR: string;
		QT_QPA_PLATFORMTHEME: string;
		LANG: string;
		HYDE_STATE_HOME: string;
		themesDir: string;
		HYDE_DATA_HOME: string;
		XDG_DESKTOP_DIR: string;
		HYDE_CONFIG_HOME: string;
		hypr_width: string;
		XDG_CONFIG_HOME: string;
		XDG_RUNTIME_DIR: string;
		OLDPWD: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		hypr_border: string;
		QT_QPA_PLATFORM: string;
		fontsDir: string;
		HYDE_THEME_DIR: string;
		DESKTOP_SESSION: string;
		HYDE_RUNTIME_DIR: string;
		USER: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		thmbDir: string;
		XDG_SESSION_TYPE: string;
		TERMINAL: string;
		XDG_DATA_HOME: string;
		XDG_TEMPLATES_DIR: string;
		PWD: string;
		_: string;
		SCREENRC: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
