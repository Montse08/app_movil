import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN: string = '@token_';
const USER: string = '@user_';
const AUTOMOBILE: string = '@automobile_';

type CacheType = {
    setToken: (token: string) => Promise<void>;
    getToken: () => Promise<string>;
    setUser: (user: Object) => Promise<void>;
    getUser: () => Promise<Object>;
    setAutomobile: (automobile: Object) => Promise<void>;
    getAutomobile: () => Promise<Object>;
    removeAll: (callback: any) => Promise<void>;
};

const CACHE: CacheType = {
    setToken: async (token: string): Promise<void> => {
        return await AsyncStorage.setItem(TOKEN, token);
    },
    getToken: async (): Promise<string> => {
        return await AsyncStorage.getItem(TOKEN);
    },
    setUser: async (user: Object): Promise<void> => {
        return await AsyncStorage.setItem(USER, JSON.stringify(user));
    },
    getUser: async (): Promise<Object> => {
        return await AsyncStorage.getItem(USER);
    },
    setAutomobile: async (automobile: Object): Promise<void> => {
        return await AsyncStorage.setItem(AUTOMOBILE, JSON.stringify(automobile));
    },
    getAutomobile: async (): Promise<Object> => {
        return await AsyncStorage.getItem(AUTOMOBILE);
    },
    removeAll: async (callback: any): Promise<void> => {
        const keys = [TOKEN, USER, AUTOMOBILE];
        return await AsyncStorage.multiRemove(keys, callback);
    }
}

export default CACHE;