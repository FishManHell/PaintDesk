import { ToolType } from "entities/Tool";
import { makeAutoObservable } from "mobx";

export class SelectToolStore {
  tool: ToolType = "brush";

  constructor() {
    makeAutoObservable(this);
  }

  setTool(newTool: ToolType) {
    this.tool = newTool;
  }
}
