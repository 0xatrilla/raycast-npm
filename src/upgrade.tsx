import { updateAllGlobalPackages } from "./lib/npm";

export default async function UpgradeCommand(): Promise<void> {
  try {
    await updateAllGlobalPackages();
  } catch {
    // updateAllGlobalPackages already shows a failure toast
  }
}
