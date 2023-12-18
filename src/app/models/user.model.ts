import { Scale } from "./scale.model";

export interface User {
  id: number;
  building: string;
  display_name: string;
  email: number;
  photo_url: string;
  scale: Scale | null;
}
