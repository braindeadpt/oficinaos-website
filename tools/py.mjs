// Corre um script Python com o primeiro interpretador disponível: python3 (Linux/macOS), python ou
// py (Windows). Assim `bun run og` e `bun run deploy` funcionam em qualquer máquina.
// Uso: bun tools/py.mjs tools/gen-og.py [--check|--published]
import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
for (const cmd of ["python3", "python", "py"]) {
  const probe = spawnSync(cmd, ["--version"], { stdio: "ignore" });
  if (probe.error || probe.status !== 0) continue;
  const run = spawnSync(cmd, args, { stdio: "inherit" });
  process.exit(run.status ?? 1);
}
console.error("Python não encontrado (python3, python ou py). Instala o Python 3 para gerar as imagens de partilha.");
process.exit(1);
