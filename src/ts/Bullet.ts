export interface Bullet extends Sprite {
    damage: number;
    owner: Sprite;
    color: RGB;
}