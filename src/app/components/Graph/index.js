'use client';

import { useState, useEffect } from 'react';
import './index.css';

import Charts from '../Charts';

import json from '../../../../data.json';

const periodsMap = {
  month: 'За последний месяц',
  year: 'За последний год',
  half_year: 'За последние 6 месяцев',
};

const monthsMap = {
  January: 'Янв',
  February: 'Фев',
  March: 'Март',
  April: 'Апр',
  May: 'Май',
  June: 'Июнь',
  July: 'Июль',
  August: 'Авг',
  September: 'Сен',
  October: 'Окт',
  November: 'Нояб',
  December: 'Дек',
};

export const Graph = () => {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [period, setPeriod] = useState('month');

  useEffect(() => {
    if (period) {
      const labels =
        period === 'month'
          ? Object.keys(json.finance.periods[0].graph[period])
          : Object.keys(json.finance.periods[0].graph[period]).map(
              (i) => monthsMap[i]
            );
      const datasets = Object.values(json.finance.periods[0].graph[period]);
      setData({ labels, datasets });
    }
  }, [period]);

  return data ? (
    <div className="w-[995px] flex justify-center p-[40px] flex-col items-center gap-[28px]">
      <div className="self-end">
        <div className="relative inline-block text-left w-[380px]">
          <div>
            <button
              type="button"
              className="flex justify-between bg-white text-[24px] leading-[30px] box-border border-main-blue border-[2px] rounded-[28px] w-full py-[9px] pr-[20px] pl-[20px] -mb-[2px] items-center"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setShow((prevState) => !prevState)}
            >
              {periodsMap[period]}
              <svg
                width="28"
                height="17"
                viewBox="0 0 28 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`arrow-icon ${show ? '-scale-y-100' : ''}`}
              >
                <path
                  d="M26 2L14 14L2 2"
                  stroke="#000AFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {show && (
            <div
              className="flex flex-col justify-between items-start gap-[16px] bg-white text-[24px] leading-[30px] box-border border-main-blue border-[2px] rounded-[28px] w-full p-[20px] dropdown
              absolute right-0 z-10 mt-0 origin-top-right focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              {Object.keys(periodsMap).map((item) =>
                item !== period ? (
                  <button
                    key={item}
                    className="block text-[24px] leading-[30px] w-full cursor-pointer text-left hover:text-main-blue"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={() => {
                      setPeriod(item);
                      setShow((prevState) => !prevState);
                    }}
                  >
                    {periodsMap[item]}
                  </button>
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
      <Charts data={data} />
    </div>
  ) : null;
};
