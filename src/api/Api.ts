import {db} from "../firebase";
import {IEntry} from "../components/entry/Entry";

export async function _getCollection(collection: string) {
    let todos: any;
    let snapshot = await db.collection(collection).get();

    todos = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    todos.sort((a: IEntry, b: IEntry) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return todos;
}

export async function _addEntry(entry: IEntry, collection: string) {
    return await db.collection(collection).doc(entry.title).set({
        id: entry.id,
        title: entry.title,
        comment: entry.comment,
        date: entry.date ? new Date(entry.date).getTime() : Date.now(),
        done: entry.done,
        tags: entry.tags,
    });
}

export async function _deleteEntry(entry: IEntry, collection: string) {
    return await db.collection(collection).doc(entry.title).delete();
}
