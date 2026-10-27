// Índice estático da pesquisa das docs (es) — gerado no build (src/lib/docs.ts).
import { t } from "../../../i18n/es";
import { searchIndexResponse } from "../../../lib/docs";

export function GET() {
  return searchIndexResponse(t, "es");
}
