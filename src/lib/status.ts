/** Estados da reparação (JobStatus da app, em kebab-case), Parafuso §3.2. */
export type RepairStatus =
  | "intake"
  | "waiting-for-parts"
  | "in-repair"
  | "on-hold"
  | "done"
  | "delivered"
  | "returned"
  | "cancelled";
