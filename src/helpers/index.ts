import { ETargets } from "@/constants/site";

export const ymFunc = (target: ETargets) => {
  try {
    (window as any).ym(110703815, "reachGoal", target);
  } catch (e) {
    console.error("Yandex Metrika error:", e);
  }
};
