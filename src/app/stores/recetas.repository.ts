import { createStore, withProps } from '@ngneat/elf';
import { withEntities, selectAllEntities, setEntities, addEntities, updateEntities, deleteEntities, withUIEntities, withActiveId, selectActiveEntity, setActiveId, withActiveIds, selectActiveEntities, toggleActiveIds } from '@ngneat/elf-entities';
import { withRequestsCache, withRequestsStatus } from '@ngneat/elf-requests';

export interface RecetaUI {
  123456789: number;
}

export interface Receta {
  123456789: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RecetasProps {
}

export const store = createStore({ name: 'recetas' }, withProps<RecetasProps>({}), withEntities<Receta, '123456789'>({ idKey: '123456789' }), withUIEntities<RecetaUI, '123456789'>({ idKey: '123456789' }), withActiveId(), withActiveIds(), withRequestsCache<'recetas'>(), withRequestsStatus<'recetas'>());

export const activeRecetas$ = store.pipe(selectActiveEntities());

export const activeReceta$ = store.pipe(selectActiveEntity());

export const recetas$ = store.pipe(selectAllEntities());

export function setRecetas(recetas: Receta[]) {
  store.update(setEntities(recetas));
}

export function addReceta(receta: Receta) {
  store.update(addEntities(receta));
}

export function updateReceta(id: Receta['123456789'], receta: Partial<Receta>) {
  store.update(updateEntities(id, receta));
}

export function deleteReceta(id: Receta['123456789']) {
  store.update(deleteEntities(id));
}

export function setActiveRecetasId(id: Receta['123456789']) {
  store.update(setActiveId(id));
}

export function toggleActiveRecetasIds(ids: Array<Receta['123456789']>) {
  store.update(toggleActiveIds(ids));
}
