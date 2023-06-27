export enum Status {
  ALL = 'Все',
  ACTIVE = 'Активные',
  PAUSED = 'На паузе',
  COMPLETED = 'Завершенные',
}

export enum StatusBack {
  ACTIVE = 'active',
  PAUSED = 'on_pause',
  COMPLETED = 'completed',
}

type Coordinates = {
  latitude: number;
  longitude: number;
};

type Company = {
  short_name: string;
  logo: string | null;
  company_phone: string | null;
};

export type Order = {
  id: number;
  load_dt: string;
  tariff_c: number;
  company: Company;
  create_dt: string;
  ending_dt: string;
  company_id: number;
  distance_m: number;
  cargo_type: string;
  tonnage_kg: number;
  views_count: number;
  tariff_nds_c: number;
  offers_count: number;
  order_state_id: number;
  coords_to: Coordinates;
  quantity_trips: number;
  loading_address: string;
  status_1c: string | null;
  coords_from: Coordinates;
  unloading_address: string;
  quantity_partners: number;
  tonnage_balance_kg: number;
  packing_way: string | null;
  order_number: number | null;
  cargo_condition: string | null;
  number_of_places: string | null;
  type_of_container: string | null;
  nextPage?: number | null;
};

export type OrdersData = {
  orders: Order[];
};
