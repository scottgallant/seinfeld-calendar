"use client";

import { Drawer } from "vaul";

export function MyDrawer({description}) {
  return (
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0 outline-none">
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4">
                  {/* Title */}
                </Drawer.Title>
                <p className="text-xl text-center">
                {description ?
                  <span>{description}</span>
                  : <span>🤷 No activities</span>
                }
                </p>
              </div>
            </div>
          </Drawer.Content>
      </Drawer.Portal>
  );
}
