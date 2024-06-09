export class Pokemon {
  public id: number;
  public hp: number;
  public cp: number;
  public name: string;
  public picture: string;

  public types: Array<string>;
  public created: Date;

  constructor(
    id: number,
    hp: number,
    cp: number,
    name: string,
    picture: string,
    types: Array<string>,
    created: Date
  ) {
    this.id = id;
    this.hp = hp;
    this.cp = cp;
    this.name = name;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
}
