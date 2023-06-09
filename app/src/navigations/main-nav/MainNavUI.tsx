"use client";

import { NavItem } from "@/src/navigations/main-nav/types/NavItem";
// import Link from "next/link";
import { Link, Button } from "@mui/material";
function MainNavUI( { items } : { items: NavItem[] }) {

    const renderItems = (items: NavItem[]): React.ReactNode[]  => {
        let nodeItems: React.ReactNode[] = []

        items.forEach(item => {
            
            nodeItems.push((
                <div className={'tw-w-28 tw-text-center tw-rounded-full'}>
                    <Button
                        variant="text"
                        color="primary"
                    >
                        <Link 
                            href={item.url}
                            underline="none"
                            color="black"
                        > 
                            {item.label} 
                        </Link>
                    </Button>
                </div>
            ))
        });
        return nodeItems

    }

    
    return(
        <nav>
            <div className={'tw-fixed tw-w-screen'}>
                <div className={'tw-flex tw-justify-around'}>
                    <figure>
                        <div>
                            img
                        </div>
                    </figure>
                    <div className={[
                        'tw-flex tw-align-center tw-justify-around tw-bg-white',
                        'tw-p-4 tw-rounded-full tw-mt-4'
                    ].join(' ')}>
                        { items &&  (
                            renderItems(items)
                        )}
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export { MainNavUI }