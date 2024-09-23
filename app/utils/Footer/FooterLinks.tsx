
import Image from 'next/image';
import React from 'react';

interface LinkItem {
  title: string;
}

const linkGroups: LinkItem[][] = [
  [
    { title: "Web Development" },
    { title: "Web Designing" }
  ],
  [
    { title: "Artificial Intelligence" },
    { title: "UI/UX Courses" }
  ],
  [
    { title: "Data Analytics" }
  ]
];

const FooterLinks = () => {
  return (
    <nav className="flex flex-col flex-1 shrink text-xl  leading-9 basis-0 min-w-[240px] text-neutral-900 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-start w-full max-md:max-w-full">
        {linkGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            {group.map((item, itemIndex) => (
              <div key={itemIndex} className={`flex overflow-hidden ${itemIndex > 0 ? 'mt-4' : ''} w-full whitespace-nowrap hover:rounded-lg min-h-[56px] hover:bg-black hover:text-white`}>
                <div className="flex-1 shrink gap-2 self-stretch p-4 h-full">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default FooterLinks;
