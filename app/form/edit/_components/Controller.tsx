"use client";

import { bgGradients, BgGradientsType } from "@/app/_data/GradientBg";
import { styles } from "@/app/_data/Styles";
import { themes, ThemeType } from "@/app/_data/Themes";
import changeFormUI from "@/app/actions/changeFormUI";
import { enableSignInAtom } from "@/app/store/atoms/enableSignInAtom";
("@/app/actions/changeFormUI");
import { formBackgroundAtom } from "@/app/store/atoms/formBackgroundAtom";
import { formStyleAtom } from "@/app/store/atoms/formStyleAtom";
import { formThemeAtom } from "@/app/store/atoms/formThemeAtom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAtom, useSetAtom } from "jotai";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Controller() {
  const setSelectedTheme = useSetAtom(formThemeAtom);
  const [selectedBackground, setSelectedBackground] =
    useAtom(formBackgroundAtom);
  const [selectedStyle, setSelectedStyle] = useAtom(formStyleAtom);
  const [showMore, setShowMore] = useState(false);
  const param = useParams();
  const formId = param.formId as string;
  const [isEnableSignIn, setIsEnableSignIn] = useAtom(enableSignInAtom);

  return (
    <div>
      {/* Theme Selection Controller */}
      <h2 className="font-bold text-modern">Select Form Theme</h2>
      <Select
        onValueChange={async (value: string) => {
          setSelectedTheme(value);
          await changeFormUI({
            type: "formTheme",
            formId: formId,
            value: value,
          });
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Themes" />
        </SelectTrigger>
        <SelectContent>
          {themes.map((theme: ThemeType, index: number) => (
            <SelectItem key={index} value={theme.name}>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <div
                    className="h-5 w-5 rounded-l-md"
                    style={{ backgroundColor: theme.primary }}
                  ></div>
                  <div
                    className="h-5 w-5"
                    style={{ backgroundColor: theme.secondary }}
                  ></div>
                  <div
                    className="h-5 w-5"
                    style={{ backgroundColor: theme.accent }}
                  ></div>
                  <div
                    className="h-5 w-5 rounded-r-md"
                    style={{ backgroundColor: theme.neutral }}
                  ></div>
                </div>
                <div>
                  {theme.name.charAt(0).toUpperCase() + theme.name.slice(1)}
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Background Selection Controller */}
      <h2 className="mt-4 my-2 font-bold text-modern">
        Select Background Theme{" "}
      </h2>
      <div
        className={`grid grid-cols-3 gap-5 p-1 transition-all duration-300
        ${
          showMore
            ? "max-h-[270px] overflow-y-auto overflow-x-hidden"
            : "max-h-[180px]"
        }`}
      >
        {bgGradients.map(
          (bg: BgGradientsType, index: number) =>
            (showMore || index < 6) && (
              <div
                key={index}
                className={`w-full h-[70px] rounded-md shadow hover:ring-2 hover:ring-gray-300 border hover:scale-105 transition-all duration-200 cursor-pointer flex items-center justify-center
            ${selectedBackground === bg.gradient && "ring-gray-500 ring-2"}`}
                onClick={async () => {
                  setSelectedBackground(bg.gradient);
                  await changeFormUI({
                    type: "formBackground",
                    formId: formId,
                    value: bg.gradient,
                  });
                }}
                style={{ background: bg.gradient }}
              >
                {bg.name === "None" && bg.name}
              </div>
            )
        )}
      </div>
      <Button
        variant={"ghost"}
        size={"sm"}
        className="w-full my-1 cursor-pointer flex justify-center shadow border"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Show More"}
      </Button>

      {/* Style Selection Controller */}
      <h2 className="mt-2 my-2 font-bold text-modern">Select Border Style</h2>
      <div className="grid grid-cols-3 gap-5 p-1">
        {styles.map((style, index) => (
          <div
            key={index}
            onClick={async () => {
              setSelectedStyle(style);
              changeFormUI({
                type: "formStyle",
                formId: formId,
                value: JSON.stringify(style),
              });
            }}
          >
            <Image
              alt={style.name}
              src={style.img}
              width={600}
              height={80}
              className={`rounded-lg cursor-pointer hover:ring-2 hover:ring-gray-300 border hover:scale-105 transition-all duration-200 shadow
              ${
                selectedStyle.name === style.name &&
                "ring-gray-500 ring-2 hover:ring-gray-500"
              }`}
            />
            <h2 className="text-center">{style.name}</h2>
          </div>
        ))}
      </div>

      <div className="flex gap-2 items-center my-4 mt-10">
        <Checkbox
          checked={isEnableSignIn}
          onCheckedChange={async (checked) => {
            setIsEnableSignIn(checked as boolean);
            await changeFormUI({
              type: "enableSignIn",
              value: checked,
              formId,
            });
          }}
        />
        <h2>Enable Authentication</h2>
      </div>
    </div>
  );
}
