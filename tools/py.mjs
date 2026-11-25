// Corre um script Python com o interpretador certo, em qualquer máquina:
//   1. o do ambiente virtual ativo (VIRTUAL_ENV), se houver;
//   2. senão, python3, python ou py — só os que forem mesmo Python 3.
// Para gerar imagens (sem --check/--published) prefere um interpretador que tenha o Pillow e o
// fontTools; a verificação e a marcação só precisam da biblioteca padrão.
// O código de saída do script é devolvido tal como está (não se repete noutro interpretador).
// Uso: bun tools/py.mjs tools/gen-og.py [--check|--published]
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const needsImaging = !args.includes("--check") && !args.includes("--published");

const candidates = [];
if (process.env.VIRTUAL_ENV) {
  const venv = process.env.VIRTUAL_ENV;
  for (const p of [join(venv, "Scripts", "python.exe"), join(venv, "bin", "python")]) {
    if (existsSync(p)) candidates.push(p);
  }
}
candidates.push("python3", "python", "py");

const ok = (cmd, code) => {
  const r = spawnSync(cmd, ["-c", code], { stdio: "ignore" });
  return !r.error && r.status === 0;
};
const isPy3 = (cmd) => ok(cmd, "import sys; sys.exit(0 if sys.version_info[0] == 3 else 1)");
const hasImaging = (cmd) => ok(cmd, "import PIL, fontTools, brotli");

const py3 = candidates.filter(isPy3);
if (!py3.length) {
  console.error("Python 3 não encontrado (ambiente virtual, python3, python ou py). Instala o Python 3.");
  process.exit(1);
}
const chosen = needsImaging ? (py3.find(hasImaging) ?? py3[0]) : py3[0];
if (needsImaging && !hasImaging(chosen)) {
  console.error(`Aviso: ${chosen} não tem Pillow/fontTools/brotli. Instala com: ${chosen} -m pip install pillow fonttools brotli`);
}
const run = spawnSync(chosen, args, { stdio: "inherit" });
process.exit(run.status ?? 1);
