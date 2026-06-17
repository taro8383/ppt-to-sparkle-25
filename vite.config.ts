// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const rawBasePath = process.env.BASE_PATH;
const isConvertedWindowsPath = typeof rawBasePath === "string" && /^[a-zA-Z]:\//.test(rawBasePath);
const basePath =
  typeof rawBasePath === "string" && !isConvertedWindowsPath
    ? rawBasePath
    : process.env.GITHUB_ACTIONS === "true"
      ? "/ppt-to-sparkle-25/"
      : "/";

export default defineConfig({
  vite: {
    base: basePath,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // GitHub Pages is static-only, so prerender the app at build time.
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
