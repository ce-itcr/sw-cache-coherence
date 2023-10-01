import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
  statSubtitle,
  statTitle,
  statIconColor,
  stepAction,
  playAction,
  code
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-16 h-10 shadow-lg rounded-full " +
                  statIconColor
                }
                onClick={stepAction}
                style={{ marginRight: 10 }}
              >
                Step
              </div>
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-16 h-10 shadow-lg rounded-full " +
                  statIconColor
                }
                onClick={playAction}
              >
                Play
              </div>
            </div>

          </div>
          <div className="flex flex-wrap" style={{paddingTop: 10}}>
            <div className=""  style={{marginLeft: 0}}>
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="full-name"
              >
                Código aleatorio
              </label>            
              <div className="bg-blueGray-200" style={{ height: 150, width: 190 }}>
                <span style={{ padding: 20, }}>
                  {code.map((line) => <p>{line}</p>)}
                </span>
              </div>

            </div>
            <div className="" style={{marginLeft: 60}}>
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="full-name"
              >
                Lineas de caché
              </label>            
              <div className="bg-blueGray-200" style={{ height: 150, width: 300 }}>
                
              </div>

            </div>
          </div>


        </div>
        
      </div>
    </>
  );
}
