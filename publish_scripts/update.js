const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

// ---------- CONFIG ----------
const YAML_PATH = path.resolve("mkdocs.yml");
const FROM = "docs_assets/";
const TO = "../../docs_assets/";
// ----------------------------

// npm strips named flags → use positional arg
const version = process.argv[2];

if (!version) {
  console.error("❌ Missing version");
  console.error("👉 Usage: npm run docs:publish -- 8");
  process.exit(1);
}

const mikeVersion = `${version}.x`;

let originalYaml;

try {
  console.log("📖 Reading YAML...");
  originalYaml = fs.readFileSync(YAML_PATH, "utf8");

  console.log("✏️  Updating asset paths...");
  fs.writeFileSync(
    YAML_PATH,
    originalYaml.replaceAll(FROM, TO)
  );

  console.log(`🚀 mike deploy --update ${mikeVersion}`);
  execSync(`mike deploy --update ${mikeVersion}`, {
    stdio: "inherit"
  });

  console.log("✅ Deployment complete");
} catch (err) {
  console.error("💥 Error:", err.message);
  process.exitCode = 1;
} finally {
  if (originalYaml) {
    console.log("🔄 Restoring YAML...");
    fs.writeFileSync(YAML_PATH, originalYaml);
  }
}
