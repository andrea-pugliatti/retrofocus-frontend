export default interface Camera {
  description: string;
  format: string;
  id: number;
  image: string;
  maxShutterSpeed: string;
  minShutterSpeed: string;
  name: string;
  type: string;
  yearDiscontinued?: string;
  yearReleased: string;
}
