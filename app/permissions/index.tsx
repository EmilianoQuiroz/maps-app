import { View, Text } from "react-native";
import React from "react";
import { usePermissionsStore } from "@/presentation/store/usePermissions";
import ThemedPressable from "@/presentation/components/ThemedPressable";

const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionsStore();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThemedPressable onPress={requestLocationPermission}>
        Habilitar ubicación
      </ThemedPressable>
      <Text>Estado actual: {locationStatus}</Text>
    </View>
  );
};

export default PermissionsScreen;
