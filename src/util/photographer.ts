import type Camera from "./camera";
import type Lens from "./lens";

export default interface Photographer {
  biography: string;
  birthday: string;
  cameras: Camera[];
  id: number;
  image: string;
  lenses: Lens[];
  name: string;
}
