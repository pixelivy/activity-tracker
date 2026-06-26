import { NavigationMenu } from "@base-ui/react"
import { Separator } from "@base-ui/react";

export function Header(){
    return (
    <div className="w-full h-8 md:h-13 bg-surface absolute border-b-edge border-b-2 top-0 gap-1 flex flex-row items-start">
        <h1 className="font-bold m-2 flex text-xs md:text-2xl text-text text-center">Activity Tracker</h1>
        <Separator orientation="vertical" className="w-3 md:w-15" />
        <NavigationMenu.Root className="relative flex-row items-center self-center">
            <NavigationMenu.List>
                <Item>
                  <NavigationMenu.Link  href="/">
                    Home
                  </NavigationMenu.Link>
                </Item>
                <Item>
                  <NavigationMenu.Link href="/recommend">
                    Recommend
                  </NavigationMenu.Link>
                </Item>
                <Item>
                  <NavigationMenu.Link href="/create">
                    Create
                  </NavigationMenu.Link>
                </Item>
                <Item>
                  <NavigationMenu.Link  href="/overview">
                    Overview
                  </NavigationMenu.Link>
                </Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    </div>);
}

function Item(props: NavigationMenu.Item.Props){
return (
    <NavigationMenu.Item
      className="text-xs md:text-2xl inline mx-1 md:m-4 text-center"
      {...props}
    />
  );
}

export function Footer(){
    return (
    <div className="w-full h-8 md:h-13 bg-surface border-t-edge border-t-2 absolute bottom-0">
        
    </div>)
}