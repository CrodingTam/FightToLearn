import { GameManager } from "../engine/GameManager";

export class Game extends GameManager{
    constructor(canvas: HTMLCanvasElement){
        super(canvas);
    }
}