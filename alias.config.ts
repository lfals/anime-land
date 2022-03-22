import path from "path";

const aliasConfig = {
  "@": path.resolve(__dirname, "./src"),
  "@views": path.resolve(__dirname, "./src/views"),
  "@routes": path.resolve(__dirname, "./src/routes.tsx"),
  "@styles": path.resolve(__dirname, "./src/assets/styles"),
  "@components": path.resolve(__dirname, "./src/components"),
  "@contexts": path.resolve(__dirname, "./src/contexts"),
  "@helpers": path.resolve(__dirname, "./src/helpers"),
};

export default aliasConfig;
