export class SimulatorError extends Error {

  constructor(public message: string) {
    super(message);
  }
}
