import { Bell, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow p-4 flex items-center justify-between">

      {/* SEARCH BAR */}
      <div className="flex items-center gap-3 w-1/2">
        <Input
          type="text"
          placeholder="Search something here"
          className="w-full"
        />
        <Button variant="outline" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
      </div>

      {/* RIGHT SIDE ICONS */}
      <div className="flex items-center gap-4">

        {/* NOTIFICATION POPOVER */}
        <Popover>
          <PopoverTrigger>
            <Button variant="outline" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <h3 className="font-semibold mb-2">Notifications</h3>
            <p className="text-sm text-gray-500">No new notifications</p>
          </PopoverContent>
        </Popover>

        {/* SETTINGS DROPDOWN */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="bg-white dark:bg-gray-900 shadow-xl border border-gray-200 rounded-lg text-white">
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Account</DropdownMenuItem>
            <DropdownMenuItem>Theme</DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* AVATAR */}
        <img
          src="https://i.pravatar.cc/300"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

    </div>
  );
};

export default Navbar;
