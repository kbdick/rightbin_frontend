export interface ApiResponse {
  data: ScaleWeight;
}

export interface ScaleWeight {
  scale: number;
}

export interface Scale {
  id: number;
  name: string;
  company_name: string;
  model_name: string;
  mode: string,
  baud_rate: number,
  data_bit: number,
  parity: string,
  stop_bit: number,
  buffer_size: number,
  flow_control: string,
  data_format: string,
  regex: string;
  scale_unit: string;
  scale_conversion: boolean;
}
