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

  public movedForward: number;
  public movedBackward: number;
  public movedLeft: number;
  public movedRight: number;

  constructor() {
    this.robotSprite = PIXI.Sprite.fromImage('./assets/cat.png');

    this.reset();
  }

  public reset() {
    this.robotSprite.position.set(160, 160);
    this.robotSprite.anchor.set(0.5, 0.5);
    this.robotSprite.rotation = 90 * (Math.PI / 180);

    this.viewDirection = Direction.East;

    this.x = 2;
    this.y = 2;

    this.movedBackward = 0;
    this.movedForward = 0;
    this.movedLeft = 0;
    this.movedRight = 0;
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

    this.movedForward++;
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

    this.movedBackward++;
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

    this.movedLeft++;
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

    this.movedRight++;
  }

  public getColorSensorPosition(): [number, number] {
    let position;

    if (this.viewDirection === Direction.North) {
      position = [this.x, this.y - 1];
    } else if (this.viewDirection === Direction.East) {
      position = [this.x + 1, this.y];
    } else if (this.viewDirection === Direction.South) {
      position = [this.x, this.y + 1];
    } else if (this.viewDirection === Direction.West) {
      position = [this.x - 1, this.y];
    }

    return position;
  }

  public getUltrasonicSensorPosition(): [number, number] {
    let position;

    if (this.viewDirection === Direction.North) {
      position = [this.x, this.y - 1];
    } else if (this.viewDirection === Direction.East) {
      position = [this.x + 1, this.y];
    } else if (this.viewDirection === Direction.South) {
      position = [this.x, this.y + 1];
    } else if (this.viewDirection === Direction.West) {
      position = [this.x - 1, this.y];
    }

    return position;
  }
}
