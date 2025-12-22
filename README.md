# Maps App 🗺️

Aplicación móvil desarrollada con React Native Expo y Zustand para gestión de mapas, ubicación y navegación.

---

## 📑 Navegación

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Inicio Rápido](#-inicio-rápido)
- [Arquitectura del Sistema](#-arquitectura-del-sistema)
  - [Estructura de Carpetas](#estructura-de-carpetas)
  - [Stack Tecnológico](#stack-tecnológico)
- [Arquitectura de Commits](#-arquitectura-de-commits)
- [Features](#-features)
  - [feature/project-initial-configuration](#featureproject-initial-configuration)
  - [feature/geolocation-and-permissions](#featuregeolocation-and-permissions)
---

## 📝 Descripción del Proyecto

Esta aplicación móvil proporciona funcionalidades avanzadas de mapas y geolocalización utilizando Expo Location. Permite a los usuarios:

- Visualizar su ubicación en tiempo real
- Gestionar permisos de ubicación de manera efectiva
- Agregar marcadores y trazar polylines en el mapa
- Seguir coordenadas y controlar la cámara del mapa
- Acceder a configuraciones del sistema cuando los permisos son denegados

La aplicación está construida con una arquitectura moderna utilizando Zustand para la gestión de estado, Expo Router para navegación, y componentes reutilizables para mantener un código limpio y escalable.

---

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js (v18 o superior)
- npm o yarn
- Expo CLI
- Dispositivo físico o emulador (Android/iOS)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/EmilianoQuiroz/maps-app.git
   cd maps-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar la aplicación**
   ```bash
   npx expo start
   ```

4. **Ejecutar en dispositivo/emulador**
   - Escanea el código QR con Expo Go (desarrollo)
   - Presiona `a` para Android emulator
   - Presiona `i` para iOS simulator

---

## 🏗️ Arquitectura del Sistema

### Estructura de Carpetas

```
maps-app/
├── app/                          # Navegación y pantallas (Expo Router)
│   ├── _layout.tsx              # Layout raíz con providers
│   ├── index.tsx                # Pantalla principal
│   ├── loading/                 # Pantalla de carga
│   ├── map/                     # Pantalla del mapa
│   └── permissions/             # Pantalla de permisos
├── assets/                       # Recursos estáticos
│   └── images/                  # Imágenes y gráficos
├── constants/                    # Constantes de la aplicación
│   └── theme.ts                 # Configuración de temas
├── presentation/                 # Capa de presentación
│   ├── components/              # Componentes reutilizables
│   │   └── shared/
│   │       └── themed-text.tsx
│   └── hooks/                   # Custom hooks
│       ├── use-color-scheme.ts
│       └── use-theme-color.ts
└── scripts/                      # Scripts de utilidad
```

### Stack Tecnológico

- **Framework**: Expo SDK
- **Lenguaje**: TypeScript
- **Navegación**: Expo Router (file-based routing)
- **Gestión de Estado**: Zustand
- **Mapas y Ubicación**: Expo Location
- **UI**: React Native
- **Styling**: StyleSheet nativo

---

## 📋 Arquitectura de Commits

Este proyecto sigue la convención de commits semánticos para mantener un historial claro y organizado.


### Tipos de Commits

- **feat**: Nueva funcionalidad
- **fix**: Corrección de bugs
- **docs**: Cambios en documentación
- **style**: Cambios de formato (no afectan el código)
- **refactor**: Refactorización de código
- **perf**: Mejoras de rendimiento
- **test**: Agregar o modificar tests
- **chore**: Tareas de mantenimiento

---

## ✨ Features

## feature/project-initial-configuration

**Descripción**: Configuración inicial del proyecto con Expo Router, incluyendo el layout raíz con providers de tema, las pantallas base del flujo de navegación, y la estructura de rutas de la aplicación.

**Funcionalidades**:
- Configuración de ThemeProvider para soporte de modo claro/oscuro
- Navegación mediante Stack Navigator con Expo Router
- Pantalla de carga inicial
- Pantalla principal de la aplicación
- Pantalla de mapa
- Pantalla de gestión de permisos
- Configuración de StatusBar adaptable al tema
- Animaciones personalizadas entre pantallas

**Implementación**:

**Layout Raíz** (`app/_layout.tsx`):
```typescript
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/presentation/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loading/index" options={{ animation: "none" }} />
        <Stack.Screen name="map/index" options={{ animation: "fade" }} />
        <Stack.Screen
          name="permissions/index"
          options={{ animation: "fade" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
```

**Pantalla Principal** (`app/index.tsx`):
```typescript
import { View, Text } from "react-native";
import React from "react";

const MapsApp = () => {
  return (
    <View>
      <Text>Maps App</Text>
    </View>
  );
};

export default MapsApp;
```

**Pantalla de Carga** (`app/loading/index.tsx`):
```typescript
import { View, Text } from "react-native";
import React from "react";

const LoadingScreen = () => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
```

**Pantalla del Mapa** (`app/map/index.tsx`):
```typescript
import { View, Text } from "react-native";
import React from "react";

const MapScreen = () => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default MapScreen;
```

**Pantalla de Permisos** (`app/permissions/index.tsx`):
```typescript
import { View, Text } from "react-native";
import React from "react";

const PermissionsScreen = () => {
  return (
    <View>
      <Text>Permissions...</Text>
    </View>
  );
};

export default PermissionsScreen;
```

**Archivos relacionados**:
- [_layout.tsx](_layout.tsx) - Layout raíz con providers y navegación
- [index.tsx](index.tsx) - Pantalla principal
- [loading/index.tsx](loading/index.tsx) - Pantalla de carga
- [map/index.tsx](map/index.tsx) - Pantalla del mapa
- [permissions/index.tsx](permissions/index.tsx) - Pantalla de permisos

**Estructura de Navegación**:
```
Root (/)
├── loading/index → Pantalla de carga (sin animación)
├── map/index → Pantalla del mapa (fade animation)
├── permissions/index → Pantalla de permisos (fade animation)
└── index → Pantalla principal
```

**Características del Stack Navigator**:
- Headers ocultos globalmente (`headerShown: false`)
- Animaciones personalizadas por pantalla
- Soporte para temas claro/oscuro
- StatusBar adaptable automáticamente

---
## feature/geolocation-and-permissions

**Descripción**: Integración con el API de Expo Location para acceder a servicios de geolocalización del dispositivo.

**Funcionalidades**:
- Acceso a la ubicación actual del dispositivo
- Suscripción a cambios de ubicación en tiempo real
- Configuración de precisión y frecuencia de actualización
- Gestión de permisos de ubicación (foreground/background)
- Verificación de estado de permisos

**Implementación**:

**Solicitar permisos de ubicación**:
```typescript
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
```

**Verificar estado de permisos**:
```typescript
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
```

**Estados de permisos**:
```typescript
export enum PermissionsStatus {
  CHECKING = "checking",      // Verificando permisos
  GRANTED = "granted",         // Permisos concedidos
  DENIED = "denied",           // Permisos denegados
  BLOCKED = "blocked",         // Permisos bloqueados permanentemente
  LIMITED = "limited",         // Permisos limitados (iOS)
  UNAVAILABLE = "unavailable", // Servicio no disponible
  UNDETERMINED = "undetermined" // Estado no determinado
}
```

**Archivos relacionados**:
- [core/actions/permission/location.ts](actions/permission/location.ts) - Acciones de permisos de ubicación
- [infrastructure/interfaces/location.ts](../infrastructure/interfaces/location.ts) - Interfaces y enums de ubicación

---

## Permisos

**Descripción**: Sistema de gestión de permisos de ubicación para iOS y Android, incluyendo manejo de estados y redirección a configuración del sistema.

**Funcionalidades**:
- Solicitud de permisos de ubicación foreground
- Verificación del estado actual de permisos
- Manejo de diferentes estados: granted, denied, undetermined, blocked
- Redirección a ajustes del sistema para permisos denegados permanentemente

**Implementación**:

**Redirección a ajustes del sistema**:
```typescript
export const manualPermissionRequest = async () => {
  // Lanzar los ajustes de la aplicación para que el usuario 
  // pueda cambiar los permisos manualmente
  // TODO: Implementar apertura de ajustes según plataforma
};
```

**Archivos relacionados**:
- [core/actions/permission/location.ts](actions/permission/location.ts) - Gestión de permisos
- [infrastructure/interfaces/location.ts](../infrastructure/interfaces/location.ts) - Estados de permisos

---


## 🤝 Contribución

### Flujo de trabajo

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feat/nueva-funcionalidad`)
3. Commit tus cambios siguiendo la arquitectura de commits
4. Push a la rama (`git push origin feat/nueva-funcionalidad`)
5. Abre un Pull Request

### Estándares de código

- TypeScript estricto
- ESLint configurado
- Componentes funcionales con hooks
- Documentación en código JSDoc

---

**Desarrollado con ❤️ usando Expo y React Native**
