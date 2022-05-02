import { UseMutationOptions } from "react-query";

export type IOperationsMutations = "CREATE" | "UPDATE" | "REPLACE" | "DELETE";

export type IBuildMutation = Omit<IMutation, "operation">;

export interface IMutation {
  path: string;
  operation: IOperationsMutations;
  invalidatePaths?: string[];
  cacheResponse?: {
    key: string;
  };
  options?:
    | Omit<
        UseMutationOptions<any, unknown, IMutationData | undefined, unknown>,
        "mutationFn"
      >
    | undefined;
}

export interface IMutationData {
  data?: { [key: string]: any };
  appendToUrl?: string | number;
}
