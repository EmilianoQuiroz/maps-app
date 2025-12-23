import { PermissionsStatus } from "@/infrastructure/interfaces/location";
import * as Location from "expo-location";
import { Alert, Linking } from "react-native";

export const requestLocationPermission =
  async (): Promise<PermissionsStatus> => {
    // Solicitar permiso de ubicación al usuario
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      if (status === "denied") {
        manualPermissionRequest();
      }
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
  Alert.alert(
    "Permiso de ubicación necesario",
    "Por favor, habilita el permiso de ubicación en los ajustes de la aplicación.",
    [
      {
        text: "Abrir ajustes",
        onPress: () => {
          Linking.openSettings();
        },
      },
      {
        text: "Cancelar",
        style: "destructive",
      },
    ]
  );
};
