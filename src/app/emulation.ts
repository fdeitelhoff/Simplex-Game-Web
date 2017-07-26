export class Emulation {
  private colorMapData: number[][];
  private ultrasonicMapData: number[][];

  constructor() {
    this.colorMapData = [];
    this.colorMapData[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.colorMapData[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.colorMapData[2] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
    this.colorMapData[3] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
    this.colorMapData[4] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
    this.colorMapData[5] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
    this.colorMapData[6] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
    this.colorMapData[7] = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
    this.colorMapData[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.colorMapData[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.ultrasonicMapData = [];
    this.ultrasonicMapData[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.ultrasonicMapData[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.ultrasonicMapData[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.ultrasonicMapData[3] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
    this.ultrasonicMapData[4] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
    this.ultrasonicMapData[5] = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
    this.ultrasonicMapData[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.ultrasonicMapData[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.ultrasonicMapData[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.ultrasonicMapData[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  public readColorSensorValue(x: number, y: number): number {
    let value = this.colorMapData[y][x];

    // TODO: Hack!
    if (value === undefined) {
      value = -1;
    }

    return value;
  }

  public readUltrasonicSensorValue(x: number, y: number): number[] {
    const values = [0, 0, 0, 0];

    values[0] = this.ultrasonicMapData[y][x];
    values[1] = this.ultrasonicMapData[y][x + 1];
    values[2] = this.ultrasonicMapData[y - 1][x];
    values[3] = this.ultrasonicMapData[y + 1][x];

    return values;
  }
}
