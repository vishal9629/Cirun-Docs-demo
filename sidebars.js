/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  sidebar: [
    {
      label: "Quickstart",
      type: "doc",
      id: "Quickstart",
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
        title: "Reference",
        slug: "category/Reference",
        keywords: ["Reference"],
      },
      items: [
        "Reference/yaml",
        "Reference/Fallback",
        "Reference/examples",
        "Reference/gotchas",
      ],
    },
    {
      type: "category",
      label: "Cloud",
      link: { type: "doc", id: "Cloud/index" },
      items: ["Cloud/auth", "Cloud/custom_images", "Cloud/Arm based machines"],
    },
    {
      type: "doc",
      label: "Privacy",
      id: "Privacy/Privacy Policy",
    },
    {
      type: "doc",
      label: "Terms of Service",
      id: "Terms of Service",
    },
  ],
};
