import { useContext } from "react";

import {
  RepositoryContext,
  RepositoryContextData,
} from "../contexts/RepositoryContext";

export function useRepository(): RepositoryContextData {
  const context = useContext(RepositoryContext);

  return context;
}
