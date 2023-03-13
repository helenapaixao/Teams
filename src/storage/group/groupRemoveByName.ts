import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";


export async function groupRemoveByName(groupDeleted: string) {
    try {
        const storagedGroup = await groupsGetAll();
        const groups = storagedGroup.filter(group => group !== groupDeleted);
        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);

    } catch (error) {
        console.log(error);
    }
}