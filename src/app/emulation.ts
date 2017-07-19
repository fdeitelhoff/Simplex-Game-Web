export class Emulation {
  private mapData: number[][];

  constructor() {
    this.mapData = [];
    this.mapData[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.mapData[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.mapData[2] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
    this.mapData[3] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
    this.mapData[4] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
    this.mapData[5] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
    this.mapData[6] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
    this.mapData[7] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
    this.mapData[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.mapData[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  public readColorSensorValue(x: number, y: number) {
    let value = this.mapData[y][x];

    // TODO: Hack!
    if (value === undefined) {
      value = -1;
    }

    return value;
  }
}
