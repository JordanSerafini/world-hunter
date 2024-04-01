import { create } from 'zustand';
import  { PoiStore } from "../types/poi.type";

import { url } from "../url/url";


export const usePoiStore = create<PoiStore>((set) => ({
  poi: [],
  addPoi: (poi) => set((state) => ({ poi: [...state.poi, poi] })),
  removePoi: (poi) =>
    set((state) => ({
      poi: state.poi.filter((p) => p.id !== poi.id),
    })),
  updatePoi: (poi) =>
    set((state) => ({
      poi: state.poi.map((p) => (p.id === poi.id ? poi : p)),
    })),
  clearPoi: () => set({ poi: [] }),
  fetchPois: async () => {
    try {
      const response = await fetch(`${url.main}/poi`);
      const pois = await response.json(); 
      set({ poi: pois });
    } catch (error) {
      console.error("Failed to fetch POIs:", error);
    }
  },
}));

// Selector functions
export const getPoiByID = (id: string) => usePoiStore.getState().poi.find((p) => p.id === id);
export const getPoiByLocation = (lat: number, lng: number) =>
  usePoiStore.getState().poi.find((p) => p.lat === lat && p.lng === lng);
export const getPoiByName = (name: string) =>
  usePoiStore.getState().poi.find((p) => p.name === name);
