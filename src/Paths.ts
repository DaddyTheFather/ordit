import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

import { getNetworkPath } from "./Workers/Ord/Utilities";

export const DIR_ROOT = resolve(__dirname, "..");

// ### Bitcoin Core Paths

export const DATA_DIR = resolve(DIR_ROOT, ".data");

// ### ORD Paths

export const ORD_DATA = resolve(DIR_ROOT, ".ord");
export const ORD_DATA_GREEN = resolve(ORD_DATA, "green");
export const ORD_DATA_BLUE = resolve(ORD_DATA, "blue");
export const ORD_DATA_SNAPSHOT = resolve(ORD_DATA, "snapshot");
export const ORD_DATA_SNAPSHOTS = resolve(ORD_DATA_SNAPSHOT, "snapshots");

// ### Output Parser

export const PARSER_DATA = resolve(DATA_DIR, "outputs");
export const PARSER_VALUES = resolve(DATA_DIR, "values");
export const PARSER_ERROR = resolve(DATA_DIR, "failed");

// ### Sado Parser

export const SADO_DATA = resolve(DATA_DIR, "sado");

// ### Ensure Paths Exists

mkdirSync(DATA_DIR, { recursive: true });
mkdirSync(getNetworkPath(ORD_DATA), { recursive: true });
mkdirSync(getNetworkPath(ORD_DATA_GREEN), { recursive: true });
mkdirSync(getNetworkPath(ORD_DATA_BLUE), { recursive: true });
mkdirSync(getNetworkPath(ORD_DATA_SNAPSHOT), { recursive: true });
mkdirSync(ORD_DATA_SNAPSHOTS, { recursive: true });
mkdirSync(PARSER_DATA, { recursive: true });
mkdirSync(PARSER_VALUES, { recursive: true });
mkdirSync(PARSER_ERROR, { recursive: true });
mkdirSync(SADO_DATA, { recursive: true });
