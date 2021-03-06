/**
 * title: Adcanved Uasge
 * desc: Controll countdown and interval status manually
 *
 * title.zh-CN: 进阶使用
 * desc.zh-CN: 手动启用并控制计时器状态, 适用于验证码或类似场景
 */

import React from 'react';
import useCountDown from '../index';

export default () => {
  const [countdown, setTargetDate] = useCountDown();

  return (
    <>
      <button
        onClick={() => {
          setTargetDate(Date.now() + 5000);
        }}
        disabled={countdown !== 0}
      >
        {countdown === 0 ? 'Start Interval' : `Reset After ${Math.round(countdown / 1000)}s`}
      </button>
      <button
        onClick={() => {
          setTargetDate(undefined);
        }}
        style={{ marginLeft: 8 }}
      >
        stop
      </button>
    </>
  );
};
