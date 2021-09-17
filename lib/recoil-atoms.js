import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const countState = atom({
  key: 'count',
  default: 0,
  effects_UNSTABLE: [persistAtom]
});

export const incrementCount = selector({
  key: 'incrementCount',
  set: ({ set }) => set(countState, (currCount) => currCount + 1)
});

export const decrementCount = selector({
  key: 'decrementCount',
  set: ({ set }) => set(countState, (currCount) => currCount - 1)
});
