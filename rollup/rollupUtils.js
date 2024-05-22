/**
 * Create a banner for the output file.
 */
const createBanner = (version, year) => {
  return `/**!
 * @nilfoundation/niljs v${version}
 *
 * @copyright (c) ${year} =nil; Foundation.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */`.trim();
};

/**
 * Get all dependencies except dev from the package.json file.
 */
const listDependencies = (packageJson) => {
  return [
    ...Object.keys(packageJson.peerDependencies),
    ...Object.keys(packageJson.dependencies),
  ];
};

export { createBanner, listDependencies };
