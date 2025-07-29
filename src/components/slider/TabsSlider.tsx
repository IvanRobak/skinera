import React from 'react';

type Props = {
  activeTab: 'new' | 'permanent';
  setActiveTab: (tab: 'new' | 'permanent') => void;
};

const TabsSlider = ({ activeTab, setActiveTab }: Props) => {
  return (
    <ul className="tabs-list flex" aria-labelledby="tabs-title">
      <li>
        <button
          type="button"
          onClick={() => setActiveTab('new')}
          className={`tabsList-button pr-9 relative inline-block text-[#a6a2a2] pb-1
            hover:text-[#212121]
            transition-all duration-500 ease-in-out
            before:content-[''] before:absolute before:left-0 before:bottom-0
            before:h-[1px] before:w-full before:bg-[#ebebeb]
            before:transition-all before:duration-500 before:ease-in-out
            before:pointer-events-none
            hover:before:bg-black
            ${activeTab === 'new' ? 'text-[#212121] before:bg-black' : ''}
          `}
        >
          Новий покупець
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => setActiveTab('permanent')}
          className={`tabsList-button pl-9 relative inline-block text-[#a6a2a2] pb-1
            hover:text-[#212121]
            transition-all duration-500 ease-in-out
            before:content-[''] before:absolute before:left-0 before:bottom-0
            before:h-[1px] before:w-full before:bg-[#ebebeb]
            before:transition-all before:duration-500 before:ease-in-out
            before:pointer-events-none
            hover:before:bg-black
            ${activeTab === 'permanent' ? 'text-[#212121] before:bg-black' : ''}
          `}
        >
          Я постійний клієнт
        </button>
      </li>
    </ul>
  );
};

export default TabsSlider;
