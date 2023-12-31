// Generated by https://quicktype.io

export interface Products {
  success: boolean;
  data: Product[];
}

export interface Product {
  producto_id: number;
  codigo: string;
  nombre: string;
  precio: number;
  imagen: string;
  activo: number;
  created_by: number;
  created_at: null;
  updated_at: null;
}
