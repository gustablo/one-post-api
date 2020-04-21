import { Controller, Get, Body, Req, Post, Param, Inject } from '@nestjs/common';
import { Model, Document } from 'mongoose';

export abstract class GenericCrudService<T> {

    constructor(
        private model: Model<any>
    ) {}

    async store(createRequest: Partial<T>): Promise<T> {
        const createdModel = new this.model(createRequest);
        return createdModel.save();
    }

    async index(): Promise<T[]> {
        return this.model.find().exec();
    }
}
