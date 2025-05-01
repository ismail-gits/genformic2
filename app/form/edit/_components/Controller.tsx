import { bgGradients, BgGradientsType } from "@/app/_data/GradientBg";
import { themes, ThemeType } from "@/app/_data/Themes";
import { formBackgroundAtom } from "@/app/store/atoms/formBackgroundAtom";
import { formThemeAtom } from "@/app/store/atoms/formThemeAtom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAtom } from "jotai";
import { useState } from "react";

export default function Controller() {
  const [selectedTheme, setSelectedTheme] = useAtom(formThemeAtom);
  const [selectedBackground, setSelectedBackground] = useAtom(formBackgroundAtom)
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* Theme Selection Controller */}
      <h2 className="my-2 font-bold text-modern">Select Font Theme</h2>
      <Select
        onValueChange={(value: string) => {
          setSelectedTheme(value);
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
      <h2 className="mt-8 my-2 font-bold text-modern">
        Select Background Theme{" "}
      </h2>
      <div className="grid grid-cols-3 gap-5 max-h-[300px] overflow-y-auto overflow-x-hidden p-1">
        {bgGradients.map((bg: BgGradientsType, index: number) => (
          <div
            key={index}
            className="w-full h-[70px] rounded-md shadow hover:ring-2 hover:ring-gray-300 border hover:scale-105 transition duration-200 cursor-pointer flex items-center justify-center"
            onClick={() => setSelectedBackground(bg.gradient)}
            style={{ background: bg.gradient }}
          >
            {bg.name === "None" && bg.name}
          </div>
        ))}
      </div>
    </div>
  );
}
