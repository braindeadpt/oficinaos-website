// Índice estático da pesquisa das docs (en) — gerado no build (src/lib/docs.ts).
import { t } from "../../../i18n/en";
import { searchIndexResponse } from "../../../lib/docs";

export function GET() {
  return searchIndexResponse(t, "en");
}
