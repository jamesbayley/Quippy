import terser from "@rollup/plugin-terser";

export default {
  input: "build/main.js",
  output: [
    {
      name: "quippy",
      file: "public/quippy.js",
      format: "iife",
      plugins: [terser()],
    },
  ],
};
