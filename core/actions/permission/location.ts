import { PermissionsStatus } from "@/infrastructure/interfaces/location";
import * as Location from "expo-location";

export const requestLocationPermission =
  async (): Promise<PermissionsStatus> => {
    // Solicitar permiso de ubicación al usuario
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      manualPermissionRequest();
      return PermissionsStatus.DENIED;
    }

    return PermissionsStatus.GRANTED;
  };

export const checkLocationPermission = async () => {
  // Verificar el estado del permiso de ubicación
  const { status } = await Location.getForegroundPermissionsAsync();

  switch (status) {
    case "granted":
      return PermissionsStatus.GRANTED;
    case "denied":
      return PermissionsStatus.DENIED;
    default:
      return PermissionsStatus.UNDETERMINED;
  }
};

export const manualPermissionRequest = async () => {
  // Lanzar los ajustes de la aplicación para que el usuario pueda cambiar los permisos manualmente
};
