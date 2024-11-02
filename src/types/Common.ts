export type IListState<T> = {
    data: T[] | null;
    isLoading: boolean;
    errors: unknown;
  };
  
  export type IEntityState<T> = {
    data: T | null;
    isLoading: boolean;
    errors: unknown;
  };
  