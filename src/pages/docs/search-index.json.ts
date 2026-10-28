// Índice estático da pesquisa das docs (pt) — gerado no build (src/lib/docs.ts).
import { t } from "../../i18n/pt";
import { searchIndexResponse } from "../../lib/docs";

export function GET() {
  return searchIndexResponse(t, "pt");
}
