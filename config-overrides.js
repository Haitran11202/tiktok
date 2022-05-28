const { useBabelRc } = require("customize-cra");
const {
    override,
} = require("customize-cra");

module.exports = override(
    useBabelRc()
);