import Point from "./Point";
import * as PIXI from "pixi.js";
import LineManager from "./LineManager";

const POINT_AMOUNT = 100;

export default class TriangleManager {
  height: number;
  width: number;
  app: PIXI.Application;
  points: Point[] = [];
  lineManager: LineManager;
  constructor(width: number, height: number) {
    this.height = height;
    this.width = width;
    this.app = new PIXI.Application({ width, height, transparent: true });
    this.app.ticker.add(delta => this.update(delta));
    this.init();
  }

  init() {
    this.points = new Array(
      // POINT_AMOUNT points when there are 1080*1920 pixels
      Math.floor(((this.width * this.height) / 2073600) * POINT_AMOUNT)
    )
      .fill(null)
      .map(_ => new Point(this.app));
    this.lineManager = new LineManager(this.app, this.points);
  }

  update(delta: number) {
    this.points.forEach(p => p.update(delta));
    this.lineManager.update();
  }

  stop() {
    this.app.stop();
  }
}
