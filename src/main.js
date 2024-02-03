import { k } from "./kaboomCtx.js";

k.scene("game", () => {
  k.add([k.rect(50, 100), k.outline(3)]);
});

k.go("game");
