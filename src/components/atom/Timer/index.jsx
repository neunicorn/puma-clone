"use client";

import { formatTime } from "@/lib/helper/timer";
import { useEffect, useRef, useState } from "react";

const Timer = ({ initialTimerInSecond, onTimerEnd, color }) => {
  const [secondRemaining, setSecondRemainng] = useState(initialTimerInSecond);
  const timerRef = useRef(null);

  useEffect(() => {
    if (secondRemaining > 0) {
      timerRef.current = setInterval(() => {
        setSecondRemainng((prev) => prev - 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      if (secondRemaining === 0 && onTimerEnd) {
        onTimerEnd();
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [secondRemaining, onTimerEnd]);

  const formattedTime = formatTime(secondRemaining);

  return (
    <div className={`flex font-bold ${color} justify-center`}>
      <span className="text-[2.5rem] tracking-[0.3125rem] leading-9">
        <span>{formattedTime.formattedDays.charAt(0)}</span>
        <span>{formattedTime.formattedDays.charAt(1)}</span>
        <span className="block text-base tracking-normal -mt-[0.1875rem] uppercase text-center">
          DAYS
        </span>
      </span>
      <span className="text-center mx-[5px] font-bold text-[2rem] tracking-[0.1rem] leading-[2rem]">
        :
      </span>
      <span className="text-[2.5rem] tracking-[0.3125rem] leading-9">
        <span>{formattedTime.formattedHours.charAt(0)}</span>
        <span>{formattedTime.formattedHours.charAt(1)}</span>
        <span className="block text-base tracking-normal -mt-[0.1875rem] uppercase text-center">
          HRS
        </span>
      </span>
      <span className="text-center mx-[5px] font-bold text-[2rem] tracking-[0.1rem] leading-[2rem]">
        :
      </span>
      <span className="text-[2.5rem] tracking-[0.3125rem] leading-9">
        <span>{formattedTime.formattedMinutes.charAt(0)}</span>
        <span>{formattedTime.formattedMinutes.charAt(1)}</span>
        <span className="block text-base tracking-normal -mt-[0.1875rem] uppercase text-center">
          MINS
        </span>
      </span>
      <span className="text-center mx-[5px] font-bold text-[2rem] tracking-[0.1rem] leading-[2rem]">
        :
      </span>
      <span className="text-[2.5rem] tracking-[0.3125rem] leading-9">
        <span>{formattedTime.formattedSeconds.charAt(0)}</span>
        <span>{formattedTime.formattedSeconds.charAt(1)}</span>
        <span className="block text-base tracking-normal -mt-[0.1875rem] uppercase text-center">
          SECS
        </span>
      </span>
    </div>
  );
};

export default Timer;
