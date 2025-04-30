import { bgGradients, BgGradientsType } from "@/app/_data/GradientBg";
import { themes, ThemeType } from "@/app/_data/Themes";
import { themeAtom } from "@/app/store/atoms/themeAtom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAtom } from "jotai";

export default function Controller() {
  const [selectedTheme, setSelectedTheme] = useAtom(themeAtom);

  return (
    <div>
      {/* Theme Selection Controller */}
      <h2 className="my-1">Select Font Theme</h2>
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
      <h2 className="mt-8 my-1">Select Background Theme </h2>
      <div className="grid grid-cols-3 gap-2">
        {bgGradients.map((bg: BgGradientsType, index: number) => (
          <div
            key={index}
            className="w-full h-[50px] rounded-md shadow border cursor-pointer"
            style={{ background: bg.gradient }}
          ></div>
        ))}
      </div>
    </div>
  );
}
