import { ETargets } from "@/constants/site";

export const ymFunc = (target: ETargets) => {
  try {
    const counterId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;
    (window as any).ym(counterId, "reachGoal", target);
  } catch (e) {
    console.error("Yandex Metrika error:", e);
  }
};
