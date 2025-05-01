import { StylesType } from "@/app/_data/Styles";
import { atom } from "jotai";

export const formStyleAtom = atom<StylesType>({
  id: 1,
  name: "default",
  img: "/default.png",
  value: "none",
  key: "1px",
});
