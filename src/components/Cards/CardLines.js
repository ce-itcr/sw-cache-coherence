import React from "react";

export default function CardLines({
}) {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                CacheSync
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                                Memoria
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap" style={{ paddingTop: 10 }}>
                        <div className="bg-blueGray-200" style={{ height: 200, width: 545 }}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
