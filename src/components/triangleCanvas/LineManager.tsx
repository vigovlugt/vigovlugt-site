import Point from "./Point";
import * as PIXI from "pixi.js";

export const MAX_DISTANCE = 200;
const LINE_WIDTH = 2;

export default class LineManager {
  app: PIXI.Application;
  points: Point[];
  graphics: PIXI.Graphics;
  constructor(app, points) {
    this.app = app;
    this.points = points;
    this.graphics = new PIXI.Graphics();
    this.app.stage.addChild(this.graphics);
  }

  update() {
    this.graphics.clear();
    this.points.forEach((p1, i) =>
      this.points.forEach((p2, j) => {
        if (i == j) return;
        const distance = this.getDistanceBetweenPoints(p1, p2);
        if (distance <= MAX_DISTANCE) {
          this.graphics
            .lineStyle(LINE_WIDTH, 0xffffff, 1 - distance / MAX_DISTANCE)
            .moveTo(p1.x, p1.y)
            .lineTo(p2.x, p2.y);
        }
      })
    );
  }

  getDistanceBetweenPoints(p1: Point, p2: Point) {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  }
}
