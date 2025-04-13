import * as Phaser from 'phaser';
import { SCENE_KEYS } from './scenes/scene-keys';
import { PreloadScene } from './scenes/preload-scene';
import { GameScene } from './scenes/game-scene';

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.WEBGL,
  pixelArt: true,
  roundPixels: true,
  scale: {
    parent: 'game-container',
    width: 960,
    height: 540,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
  },
  backgroundColor: '#000000',
};

const game = new Phaser.Game(gameConfig);

game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);
game.scene.add(SCENE_KEYS.GAME_SCENE, GameScene);
game.scene.start(SCENE_KEYS.PRELOAD_SCENE);
