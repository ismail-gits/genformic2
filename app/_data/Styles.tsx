export type StylesType = {
  id: number;
  name: string;
  img: string;
  value: string;
  key: string;
};

export const styles = [
  {
    id: 1,
    name: "default",
    img: "/default.png",
    value: "none",
    key: "1px",
  },
  {
    id: 2,
    name: "border",
    img: "/border.png",
    value: "2px solid",
    key: "border",
  },
  {
    id: 3,
    name: "retro",
    img: "/retro.png",
    value: "5px 5px 0px black",
    key: "boxshadow",
  },
];
