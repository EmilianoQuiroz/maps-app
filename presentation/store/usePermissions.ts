import {
  checkLocationPermission,
  requestLocationPermission,
} from "@/core/actions/permission/location";
import { PermissionsStatus } from "@/infrastructure/interfaces/location";
import { create } from "zustand";

interface PermissionsState {
  locationStatus: PermissionsStatus;
  requestLocationPermission: () => Promise<PermissionsStatus>;
  checkLocationPermission: () => Promise<PermissionsStatus>;
}

export const usePermissionsStore = create<PermissionsState>()((set) => ({
  locationStatus: PermissionsStatus.CHECKING,

  requestLocationPermission: async () => {
    const status = await requestLocationPermission();
    set({ locationStatus: status });
    return status;
  },

  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({ locationStatus: status });
    return status;
  },
}));
