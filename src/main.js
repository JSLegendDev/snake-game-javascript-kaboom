import { k } from "./kaboomCtx.js";

k.scene("game", () => {
  const snake = k.add([
    k.rect(50, 50),
    k.outline(3),
    k.area(),
    k.body(),
    k.pos(),
    { speed: 100 },
  ]);
  k.onKeyDown((key) => {
    if (key === "left") snake.move(-snake.speed, 0);
    if (key === "right") snake.move(snake.speed, 0);
    if (key === "up") snake.move(0, -snake.speed);
    if (key === "down") snake.move(0, snake.speed);
  });
});

k.go("game");
