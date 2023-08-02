import { Filter, FindOptions } from "mongodb";

import { config } from "../../Config";
import { collection, SadoDocument } from "./Collection";

export async function addSado(sado: SadoDocument) {
  await collection.updateOne({ cid: sado.cid }, { $set: sado }, { upsert: true });
}

export async function getSadoEntries(filter: Filter<SadoDocument>, options?: FindOptions<SadoDocument>) {
  return collection.find(filter, options).toArray();
}

export async function getSadoEntry(filter: Filter<SadoDocument>, options?: FindOptions<SadoDocument>) {
  const document = await collection.findOne(filter, options);
  if (document === null) {
    return undefined;
  }
  return document;
}

export async function getSadoCount(filter: Filter<SadoDocument>) {
  return collection.countDocuments(filter);
}

export async function getHeighestBlock(): Promise<number> {
  const order = await collection.findOne({}, { sort: { height: -1 } });
  if (order === null) {
    return config.sado.startBlock;
  }
  return order.height;
}

export async function deleteSadoAfterHeight(height: number) {
  await collection.deleteMany({ height: { $gt: height } });
}
