import { ModeToggle } from "@/components/ModeToggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CirclePlus, Home, HeartHandshake, Code } from "lucide-react";

// NavIcon 元件 - 用於顯示工具提示和連結
function NavIcon({
  icon,
  tooltip,
  href,
  target,
  onClick,
}: {
  icon: React.ReactNode;
  tooltip: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target={target}
          onClick={onClick}
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
            }),
            "rounded-full text-foreground transition-all group-hover:scale-110",
          )}
        >
          {icon}
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default function Navbar() {
  // 將提交連結設定為您提供的短網址
  const SUBMIT_URL = "https://mountos.com/contact";

  // 請替換成您自己的連結
  const YOUR_GITHUB_REPO = "https://github.com/mountos"; 
  const YOUR_SPONSOR_LINK = "https://buymeacoffee.com/mountos"; 
  
  return (
    <TooltipProvider>
      <div
        className={cn(
          "group pointer-events-none mb-4 flex h-full max-h-14",
          "fixed inset-x-0 bottom-4 z-20 mx-auto md:top-4",
        )}
      >
        {/* 背景模糊效果 */}
        <div className="fixed inset-x-0 bottom-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background md:top-0 md:[-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div
          className={cn(
            "relative mx-auto flex h-full min-h-full items-center gap-2 rounded-full px-2",
            "pointer-events-auto transition-all",
            "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
          )}
        >
          {/* 1. 首頁 (Home) */}
          <NavIcon icon={<Home size={24} />} tooltip="首頁" href="/" />
          
          {/* 2. 原始碼 (Code) - 替換為您的 Github 專案 */}
          <NavIcon
            icon={<Code size={24} />}
            tooltip="本站原始碼"
            href={YOUR_GITHUB_REPO}
            target="_blank"
          />

          {/* 3. 提交新網站 (Submit) - 直接連結到您的短網址 */}
          <NavIcon
            icon={<CirclePlus size={24} />}
            tooltip="提交新網站建議"
            href={SUBMIT_URL}
            target="_blank"
          />
          
          <Separator orientation="vertical" className="my-2 h-full" />

          {/* 4. 贊助支持 (Sponsor) - 替換為您的贊助連結 */}
          <NavIcon
            icon={<HeartHandshake size={24} />}
            tooltip="支持本站運行"
            href={YOUR_SPONSOR_LINK}
            target="_blank"
          />

          <Separator orientation="vertical" className="h-full py-2" />
          
          {/* 5. 主題切換 (Theme Toggle) */}
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>主題切換</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}

