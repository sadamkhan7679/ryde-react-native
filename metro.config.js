const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname, { isCSSEnabled: true });

// Add resolver for lightningcss
config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    ...config.resolver.extraNodeModules,
    lightningcss: require.resolve("lightningcss"),
  },
};

module.exports = withNativeWind(config, { input: "./styles/global.css" });
