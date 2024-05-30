import React from 'react'
import DevTooltip from './DevTooltip'
import DevButton from './DevButton'
import { BiRedo, BiUndo } from 'react-icons/bi'
import EditorClips from './EditorClips'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { IoCodeSlash } from 'react-icons/io5'

const EditorHeader = ( { undo, redo, pastStates, futureStates, setTextData, switchTab, setSwitchTab }) => {
  return (
    <div className="flex divide-y-2 gap-1 divide-cyan-400/50 p-1 rounded-xl flex-wrap bg-slate-50 border border-cyan-400/50 shadow items-center w-full sticky top-0">
    <div className="flex items-center justify-between w-full">
      <span className=" bg-cyan-400/50 rounded-full p-[2px] px-2 divide-x divide-cyan-400 flex items-center justify-center">
        <DevTooltip tipData="Undo">
          <DevButton
            ripple={true}
            onClick={() => undo()}
            size="sm"
            icon={true}
            variant="customForIcon"
            rounded="full"
          >
            <BiUndo className="text-xl" />
          </DevButton>
        </DevTooltip>
        <DevTooltip tipData="Past States">
          <DevButton
            ripple={true}
            size="sm"
            variant="customForIcon"
            rounded="none"
            className="text-sm"
          >
            {pastStates && pastStates.length}
          </DevButton>
        </DevTooltip>
        <DevTooltip tipData="Redo">
          <DevButton
            ripple={true}
            onClick={() => redo()}
            size="sm"
            icon={true}
            variant="customForIcon"
            rounded="full"
          >
            <BiRedo className="text-xl" />
          </DevButton>
        </DevTooltip>
      </span>
      <DevTooltip tipData="Preview Code">
        <DevButton icon={true} onClick={setSwitchTab}>
          {switchTab ? (
            <IoCodeSlash className="text-xl" />
          ) : (
            <IoMdArrowRoundBack className="text-xl" />
          )}
        </DevButton>
      </DevTooltip>
    </div>

    <EditorClips />
  </div>
  )
}

export default EditorHeader