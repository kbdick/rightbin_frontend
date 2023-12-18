export interface Collect {
  id: number;
  location_id: number;
  location_name: string;
  container_id: number;
  container_name: string;
  waste_type_id: number
  waste_type: string;
  collector_id: number;
  collector_name: string;
  scale_weight: number;
  tare_weight: number;
  net_weight: number;
  weighed_at: number;
}

export type CollectInput = {
  location_id: number;
  container_id: number;
  waste_type: string;
  collector_id: number;
  scale_weight: number;
  tare_weight: number;
  net_weight: number;
  weighed_at: number;
}
