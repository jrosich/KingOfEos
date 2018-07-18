// taken from https://github.com/zeit/next.js/blob/canary/examples/with-universal-configuration/env-config.js
const isProduction = process.env.NODE_ENV === `production`
if (isProduction) {
    console.log(`Injecting production variables. nextjs might still set NODE_ENV to "development".`)
}
require(`dotenv`).config()

// Because a babel plugin is used the output is cached in node_modules/.cache by babel-loader.
// When modifying the configuration you will have to manually clear this cache to make changes visible
const keys = [
    `EOS_NETWORK_PROTOCOL`,
    `EOS_NETWORK_HOST`,
    `EOS_NETWORK_PORT`,
    `EOS_NETWORK_CHAINID`,
    `EOS_CORE_SYMBOL`,
    `EOS_CONTRACT_NAME`,
]
const exportsObject = keys.reduce(
    (acc, key) => Object.assign({}, acc, { [key]: process.env[key] }),
    {},
)

module.exports = exportsObject
