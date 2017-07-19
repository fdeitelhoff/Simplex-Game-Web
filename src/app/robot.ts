import * as PIXI from 'pixi.js';

enum Direction {
    North = 1,
    East,
    South,
    West
}

export class Robot {
  public robotSprite: PIXI.Sprite;
  private viewDirection: Direction;
  public x: number;
  public y: number;

  constructor() {
    this.robotSprite = PIXI.Sprite.fromImage('./assets/cat.png');

    this.reset();
  }

  public reset() {
    this.robotSprite.position.set(160, 160);
    this.robotSprite.anchor.set(0.5, 0.5);
    this.robotSprite.rotation = 90 * (Math.PI / 180);

    this.viewDirection = Direction.East;

    this.x = 3;
    this.y = 3;
  }

  public forward () {
    if (this.viewDirection === Direction.North) {
      this.robotSprite.y -= 64;
      this.y -= 1;
    } else if (this.viewDirection === Direction.East) {
      this.robotSprite.x += 64;
      this.x += 1;
    } else if (this.viewDirection === Direction.South) {
      this.robotSprite.y += 64;
      this.y += 1;
    } else if (this.viewDirection === Direction.West) {
      this.robotSprite.x -= 64;
      this.x -= 1;
    }
  }

  public back() {
    if (this.viewDirection === Direction.North) {
      this.robotSprite.y += 64;
      this.y += 1;
    } else if (this.viewDirection === Direction.East) {
      this.robotSprite.x -= 64;
      this.x -= 1;
    } else if (this.viewDirection === Direction.South) {
      this.robotSprite.y -= 64;
      this.y -= 1;
    } else if (this.viewDirection === Direction.West) {
      this.robotSprite.x += 64;
      this.x += 1;
    }
  }

  public left() {
    const radians = 90 * (Math.PI / 180);
    this.robotSprite.rotation -= radians;

    if (this.viewDirection === Direction.North) {
      this.viewDirection = Direction.West;
    } else if (this.viewDirection === Direction.East) {
      this.viewDirection = Direction.North;
    } else if (this.viewDirection === Direction.South) {
      this.viewDirection = Direction.East;
    } else if (this.viewDirection === Direction.West) {
      this.viewDirection = Direction.South;
    }
  }

  public right() {
    const radians = 90 * (Math.PI / 180);
    this.robotSprite.rotation += radians;

    if (this.viewDirection === Direction.North) {
      this.viewDirection = Direction.East;
    } else if (this.viewDirection === Direction.East) {
      this.viewDirection = Direction.South;
    } else if (this.viewDirection === Direction.South) {
      this.viewDirection = Direction.West;
    } else if (this.viewDirection === Direction.West) {
      this.viewDirection = Direction.North;
    }
  }
}
