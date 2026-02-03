import { Sheet,SheetContent,SheetTitle,SheetHeader } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
interface NavBarItem{
	href:string,
	children:React.ReactNode;
}
interface Props{
	items:NavBarItem[],
	open:boolean,
	onOpenChange:(open:boolean)=>void;
}
export  const NavbarSidebar=(
	{
		items,
		open,
		onOpenChange
	}:Props
)=> {
  return (
	
		<Sheet items={items} open={open} onOpenChange={onOpenChange}>
			<SheetContent side="left" className="p-0 transition-none">
				<SheetHeader className="p-4 border-b">
					<div className="flex items-center">
						<SheetTitle >
							Menu
						</SheetTitle>
					</div>
				</SheetHeader>
			</SheetContent>
		</Sheet>


	
  )
}
