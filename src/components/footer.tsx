import { AppConfig } from "@/app.config";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="border sticky top-full">
      <div className="container h-16 flex items-center">
        <p className="text-muted-foreground">&copy; Aki </p>
        <span className="flex-1" />
        <ModeToggle />
        <Button asChild size="icon" variant="ghost">
          <a href={AppConfig.GitHubURL} target="_blank" rel="noreferrer">
            <GitHubLogoIcon className="size-5" />
          </a>
        </Button>
      </div>
    </footer>
  );
}
