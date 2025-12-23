import { AppState } from "react-native";
import { PropsWithChildren, useEffect } from "react";
import { usePermissionsStore } from "../store/usePermissions";
import { PermissionsStatus } from "@/infrastructure/interfaces/location";
import { router } from "expo-router";

const PermissionsCheckerProvider = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionsStore();

  useEffect(() => {
    if (locationStatus === PermissionsStatus.GRANTED) {
      router.replace("/map");
    } else if (locationStatus !== PermissionsStatus.CHECKING) {
      router.replace("/permissions");
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  // Funcion: Estar pendiente cuando el estado de la aplicacion cambia
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active") {
        checkLocationPermission();
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);

  return <>{children}</>;
};

export default PermissionsCheckerProvider;
