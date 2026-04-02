import type Camera from "./camera";
import type Lens from "./lens";
import type Photographer from "./photographer";

export type Item = Camera | Lens | Photographer;

export const isCamera = (item: Item): item is Camera =>
  "type" in item && "format" in item && "yearReleased" in item;

export const isLens = (item: Item): item is Lens =>
  "isAutofocus" in item && "minFocalLength" in item;

export const isPhotographer = (item: Item): item is Photographer =>
  "biography" in item && "birthday" in item;

export const getYearFromString = (date: string): string | undefined => date.split("-").at(0);

export const getYearFromItem = (item: Item): string | undefined =>
  isPhotographer(item) ? getYearFromString(item.birthday) : getYearFromString(item.yearReleased);
