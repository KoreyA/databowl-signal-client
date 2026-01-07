import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "entry.js",
  output: {
    file: "dist/signal.bundle.js",
    format: "iife",
    name: "DatabowlSignal",
  },
  plugins: [resolve({ browser: true }), commonjs()],
};
