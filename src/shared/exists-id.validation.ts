import * as mongoose from 'mongoose';

export async function existsById(collection: string, value: string) {

    if (value.length !== 24) {
        return false;
    }

    const model = mongoose.model(collection);

    const exists = await model.findById(value).exec();

    return exists;
}