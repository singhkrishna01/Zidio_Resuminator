/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2024 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
.
*/

import { GetState, SetState } from "zustand";
import { updateArray } from "../utils";
import { Store } from "./types";

const store = <ObjectType>(
  set: SetState<Store<ObjectType>>,
  get: GetState<Store<ObjectType>>
): Store<ObjectType> => ({
  data: [],
  setData: (list) => set({ data: list }),
  add: (obj) => set((state) => ({ data: [obj, ...state.data] })),
  update: (index, key, value) => {
    const obj = { ...get().data[index], [key]: value };
    set((state) => ({ data: updateArray(state.data, index, obj) }));
  }
});

export default store;
