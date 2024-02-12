import react from "@vitejs/plugin-react";

/**
 * @type {import("vite").UserConfig}
 */

export default {
  base: "/hn-react/",
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  plugins: [react()],
};
