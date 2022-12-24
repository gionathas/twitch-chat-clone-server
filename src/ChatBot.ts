import { Server } from "socket.io";
import { SimpleIntervalJob, Task, ToadScheduler } from "toad-scheduler";
import { generateMessage } from "./helpers";

export default class ChatBot {
  private readonly DELAY_SECONDS = 10;

  private socket: Server;
  private scheduler: ToadScheduler;

  constructor(socket: Server) {
    this.socket = socket;
    this.scheduler = new ToadScheduler();
  }

  public start() {
    const task = new Task("emit bot message", () => {
      const botMessage = generateMessage();
      this.socket.emit("new-message", botMessage);
    });

    const job = new SimpleIntervalJob({ seconds: this.DELAY_SECONDS }, task);

    this.scheduler.addSimpleIntervalJob(job);
  }
}
