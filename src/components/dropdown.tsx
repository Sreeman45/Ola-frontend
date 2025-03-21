import { AlignJustify } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Dropdown() {
  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AlignJustify className="size-10 text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-pink-700 font-semibold text-xl text-white px-12">
            <DropdownMenuLabel className="mx-8"> Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-semibold text-lg">
              Perfumes
            </DropdownMenuItem>
            <DropdownMenuItem className="font-semibold text-lg">
              Account
            </DropdownMenuItem>
            <DropdownMenuItem className="font-semibold text-lg">
              Orders
            </DropdownMenuItem>
            <DropdownMenuItem className="font-semibold text-lg mb-4">
              Billings
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
