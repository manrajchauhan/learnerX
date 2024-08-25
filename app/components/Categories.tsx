import React from 'react'

export default function Categories() {
  return (
        <div className="flex overflow-hidden z-0 flex-col justify-center py-16 w-full font-medium text-neutral-900 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-end w-full max-md:max-w-full">
              <div className="flex-1 shrink text-8xl basis-0 leading-[103px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Courses by Category
              </div>
              <div className="flex-1 shrink text-lg leading-8 basis-0 max-md:max-w-full">
              From critical skills to technical topics, LearnerX supports your professional development.
              </div>
            </div>
            <div className="flex flex-col justify-center py-10 mt-4 w-full text-4xl leading-tight max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
                  <div className="flex overflow-hidden flex-wrap flex-1 shrink whitespace-nowrap bg-white rounded-md border-2 border-solid basis-0 border-neutral-900 min-h-[228px] min-w-[240px] max-md:max-w-full">
                    <div className="flex-1 shrink p-10 min-w-[240px] max-md:px-5 hover:bg-black hover:text-white">
                      Web Development
                    </div>
                  </div>
                  <div className="flex overflow-hidden flex-wrap flex-1 shrink bg-white rounded-md border-2 border-solid basis-0 border-neutral-900 min-h-[228px] min-w-[240px] max-md:max-w-full">
                    <div className="flex-1 shrink p-10 min-w-[240px] max-md:px-5 hover:bg-black hover:text-white">
                      Web Desiging
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-10 items-start mt-10 w-full max-md:max-w-full">
                  <div className="flex overflow-hidden flex-wrap flex-1 shrink bg-white rounded-md border-2 border-solid basis-0 border-neutral-900 min-h-[228px] min-w-[240px] max-md:max-w-full">
                    <div className="flex-1 shrink p-10 min-w-[240px] max-md:px-5 hover:bg-black hover:text-white">
                      AI
                    </div>
                  </div>
                  <div className="flex overflow-hidden flex-wrap flex-1 shrink bg-white rounded-md border-2 border-solid basis-0 border-neutral-900 min-h-[228px] min-w-[240px] max-md:max-w-full">
                    <div className="flex-1 shrink p-10 min-w-[240px] max-md:px-5 hover:bg-black hover:text-white">
                      Data Science
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
