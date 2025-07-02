import { MMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware";

const storage = new MMKV();

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
};

export const getStorageItem = (key: string) => {
  return zustandStorage.getItem(key);
};

export const setStorageItem = (key: string, value: string) => {
  zustandStorage.setItem(key, value);
};

export const removeStorageItem = (key: string) => {
  zustandStorage.removeItem(key);
};

export default zustandStorage;
