export interface Poi {
    id: string;
    name: string;
    description: string;
    lat: number;
    lng: number;
    owner: string | number;
    url: string;
  }
  
export  interface PoiStore {
    poi: Poi[];
    addPoi: (poi: Poi) => void;
    removePoi: (poi: Poi) => void;
    updatePoi: (poi: Poi) => void;
    clearPoi: () => void;
    fetchPois: () => Promise<void>;
    
}