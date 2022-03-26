import UserCache from './User';

export { UserCache };

export async function RemoveAll() {
    await UserCache.removeAll();
}