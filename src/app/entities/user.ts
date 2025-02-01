export default class User {
  id: number;
  name: string;
  level: number;
  atkMin: number;
  atkMax: number;
  xp: number;
  posY: number;
  posX: number;

  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.level = props.level;
    this.xp = props.xp;
    this.posX = props.posX;
    this.posY = props.posY;
  }
}
