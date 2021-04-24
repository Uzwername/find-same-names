const yargs = require("yargs");
const packageJson = require("$root/package.json");

const argv = yargs(process.argv.slice(2))
  .scriptName(packageJson.name)
  .command("$0", packageJson.description, {
    baseDir: {
      type: "string",
      default: process.env.PWD || process.cwd(),
      describe: "Path of the directory where search for duplicate file names will be performed. Defaults to current directory.",
    },
    ignoreNames: {
      type: "array",
      default: [],
      describe: "List of file names to ignore",
    },
    ignoreDirectories: {
      type: "array",
      default: [],
      describe: "List of directory names to ignore",
    },
    ignoreExtensions: {
      type: "array",
      default: [],
      describe: "List of file extensions to ignore",
    },
    ignorePatterns: {
      type: "array",
      default: [],
      describe: "List of patterns to ignore",
    },
    ignoreSpecialFilesPatterns: {
      type: "array",
      default: [
        // Based on https://github.com/github/gitignore/blob/master/Node.gitignore
        "logs",
        "*.log",
        "npm-debug.log*",
        "yarn-debug.log*",
        "yarn-error.log*",
        "lerna-debug.log*",
        "report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json",
        "pids",
        "*.pid",
        "*.seed",
        "*.pid.lock",
        "lib-cov",
        "coverage",
        "*.lcov",
        ".nyc_output",
        ".grunt",
        "bower_components",
        ".lock-wscript",
        "node_modules",
        "jspm_packages",
        "web_modules",
        "*.tsbuildinfo",
        ".npm",
        ".eslintcache",
        ".rpt2_cache",
        ".rts2_cache_cjs",
        ".rts2_cache_es",
        ".rts2_cache_umd",
        ".node_repl_history",
        "*.tgz",
        ".yarn-integrity",
        ".env",
        ".env.test",
        ".cache",
        ".parcel-cache",
        ".next",
        ".nuxt",
        ".cache/",
        ".vuepress",
        ".serverless",
        ".fusebox",
        ".dynamodb",
        ".tern-port",
        ".vscode-test",
        ".yarn",
        ".pnp.*",
      ],
      describe: "List of special patterns to ignore",
    },
  })
  .help()
  .alias("help", "h")
  .alias("version", "v")
  .strict()
  .argv;
  
console.log({
  argv,
});