import type Camera from "./camera";
import type Lens from "./lens";

export default interface Mount {
  id: number;
  name: string;
  description: string;
  lenses: Lens[];
  cameras: Camera[];
}
