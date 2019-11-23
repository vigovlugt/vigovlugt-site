import * as PIXI from "pixi.js";
import { MAX_DISTANCE } from "./LineManager";

const MAX_VELOCITY = 0.5;
const MIN_VELOCITY = 0.01;
const RADIUS = 3;

export default class Point {
  x: number;
  y: number;
  vx: number;
  vy: number;

  app: PIXI.Application;
  graphics: PIXI.Graphics;
  constructor(app: PIXI.Application) {
    this.x = app.screen.width * Math.random();
    this.y = app.screen.height * Math.random();
    this.vx =
      (Math.random() * (MAX_VELOCITY - MIN_VELOCITY) + MIN_VELOCITY) *
      (Math.random() > 0.5 ? 1 : -1);
    this.vy =
      (Math.random() * (MAX_VELOCITY - MIN_VELOCITY) + MIN_VELOCITY) *
      (Math.random() > 0.5 ? 1 : -1);
    this.app = app;

    this.graphics = new PIXI.Graphics();

    this.graphics.beginFill(0xffffff);
    this.graphics.lineStyle(0, 0, 0);
    this.graphics.drawCircle(0, 0, RADIUS);
    this.graphics.endFill();

    app.stage.addChild(this.graphics);
  }

  update(delta: number) {
    this.x += delta * this.vx;
    this.y += delta * this.vy;
    this.graphics.position.x = this.x;
    this.graphics.position.y = this.y;
    this.checkOutOfBounds();
  }

  checkOutOfBounds() {
    if (this.x > this.app.screen.width + MAX_DISTANCE) this.x = -MAX_DISTANCE;
    if (this.x < -MAX_DISTANCE) this.x = this.app.screen.width + MAX_DISTANCE;
    if (this.y > this.app.screen.height + MAX_DISTANCE) this.y = -MAX_DISTANCE;
    if (this.y < -MAX_DISTANCE) this.y = this.app.screen.height + MAX_DISTANCE;
  }
}
