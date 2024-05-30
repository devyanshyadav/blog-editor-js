import React from 'react'

const StateManager = ( { pastStates, futureStates, setTextData }) => {
  return (
    <section className="w-full grid grid-cols-2 gap-2">
    <div>
      <h1 className="text-slate-800 font-semibold">Past States</h1>
      {pastStates.map((e, i) => (
        <div className="w-full p-2 m-1 rounded-md border bg-slate-100 overflow-hidden">
          <button onClick={() => setTextData(e?.textData)}>
            change to paste
          </button>
          <p>{e?.textData}</p>
        </div>
      ))}
    </div>
    <div>
      <h1 className="text-slate-800 font-semibold">Future States</h1>
      {futureStates.map((e, i) => (
        <div className="w-full p-2 m-1 rounded-md border bg-slate-100 overflow-hidden">
          <button onClick={() => setTextData(e?.textData)}>
            change to paste
          </button>
          <p>{e?.textData}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default StateManager