import MainScene from "./MainScreen.js";
// create gamespace
const config = {
  width: 500,
  height: 500,
  type: Phaser.AUTO,
  parent: "snake",
  scene: [MainScene]
};


new Phaser.Game(config);
