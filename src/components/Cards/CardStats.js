import React from "react";

export default function CardStats({
  statSubtitle,
  statTitle,
  stepAction,
  playAction,
  code,
  lines
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
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                style={{ backgroundColor: "#271744" }}
              >
                <i className="fas fa-forward-step text-white mr-4"></i>
                Step
              </button>
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                style={{ backgroundColor: "#271744" }}
              >
                <i className="fas fa-play text-white mr-4"></i>
                Start
              </button>

            </div>

          </div>
          <div className="flex flex-wrap" style={{ paddingTop: 10 }}>
            <div className="" >
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="full-name"
              >
                Código aleatorio
              </label>
              <div style={{ height: 150, width: 190, backgroundColor: '#282c34', color: '#fff', padding: 20, borderRadius: 5, fontFamily: 'monospace', overflow: 'auto' }}>
                <span>
                  {code.map((line) => <p>{line}</p>)}
                </span>
              </div>

            </div>
            <div className="" style={{ marginLeft: 60 }}>
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="full-name"
              >
                Lineas de caché
              </label>
              <div className="bg-blueGray-200" style={{ height: 150, width: 300 }}>
                <div className="flex flex-wrap" style={{ justifyContent: 'center', justifySelf: 'center', paddingTop: 8}}>
                  <span style={{ padding: 2, }}>
                    {lines.map((line) =>
                      <div className="flex flex-wrap">
                        <p style={{ borderColor: '#000', border: 'solid', borderWidth: 0.5, width: 20, height: 32, paddingLeft: 5 }}>{line.key} </p>
                        <p style={{ borderColor: '#000', border: 'solid', borderWidth: 0.5, width: 120, paddingLeft: 5 }}>{line.value}</p>
                      </div>
                    )}
                  </span>
                  <span style={{ padding: 2, }}>
                    {lines.map((line) =>
                      <div className="flex flex-wrap">
                        <p style={{ borderColor: '#000', border: 'solid', borderWidth: 0.5, width: 20, height: 32, paddingLeft: 5 }}>{line.key} </p>
                        <p style={{ borderColor: '#000', border: 'solid', borderWidth: 0.5, width: 120, paddingLeft: 5 }}>{line.value}</p>
                      </div>
                    )}
                  </span>
                </div>
              </div>

            </div>
          </div>


        </div>

      </div>
    </>
  );
}
