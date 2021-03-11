import React, { useEffect, useState } from 'react';
// import { Store } from '../Store';
import { PingResponse } from 'ping';
import checkDiskSpace from 'check-disk-space';
import { Systeminformation } from 'systeminformation';
import {
  FectchCpuLoad,
  FetchDiskUsage,
  FetchMemInfo,
  FetchOSInfo,
  PingPublicNetwork,
} from '../Actions';
import { convertPlatformName } from '../lib/platform';
// import icon from '../../assets/icon.svg';
import Card from '../components/card/Card';
// import styles from '../components/card/style.css';

function colorLevelForPercent(p: number): string {
  if (p < 50) return 'green';
  if (p >= 50 && p <= 80) return 'yellow';
  if (p > 80) return 'red';
  return 'green';
}

function calcDisk(diskSpace: checkDiskSpace.CheckDiskSpaceResult): number {
  return Math.floor(((diskSpace.size - diskSpace.free) / diskSpace.size) * 100);
}

function calcMem(memData: Systeminformation.MemData): number {
  return Math.floor((memData.active / memData.total) * 100);
}

const Home = () => {
  // CPU
  const [cpuLoad, setCpuLoad] = useState(0);
  // Public Network
  const [pubNetAlive, setPubNetAlive] = useState(false);
  const [pubNetDelay, setPubNetDelay] = useState(0);
  // System
  const [platform, setPlatform] = useState('');
  // Disk
  const [
    diskSpace,
    setDiskSpace,
  ] = useState<checkDiskSpace.CheckDiskSpaceResult>({
    free: 0,
    size: 0,
  });
  // Memory
  const [memData, setMemData] = useState<Systeminformation.MemData>(Object);

  useEffect(() => {
    // 轮训更新状态
    const homeInternal = setInterval(async () => {
      const load: number = await FectchCpuLoad();
      const pubNetRes: PingResponse = await PingPublicNetwork();
      const pt = FetchOSInfo();
      const diskSpaceRes = await FetchDiskUsage();
      const memRes = await FetchMemInfo();
      // console.log('mem');
      // console.log(memRes);
      // console.log('platform');
      // console.log(pt);
      // console.log('diskspace');
      // console.log(diskSpaceRes);
      // console.log(pubNetRes.alive, pubNetRes.avg);
      // console.log(load);
      // eslint-disable-next-line radix
      // console.log(load, Math.floor(load));
      if (load) setCpuLoad(Math.floor(load));
      setPubNetAlive(pubNetRes.alive);
      if (pubNetRes.avg) setPubNetDelay(parseInt(pubNetRes.avg, 10));
      setPlatform(pt);
      setDiskSpace(diskSpaceRes);
      setMemData(memRes);
    }, 1000);
    return () => {
      clearInterval(homeInternal);
    };
  }, [cpuLoad]);

  return (
    <div className="main-container">
      <Card
        content={`${convertPlatformName(platform)}`}
        title="系统"
        comment="正常"
        color={colorLevelForPercent(0)}
      />
      <Card
        content={`${calcDisk(diskSpace)}%`}
        title="硬盘空间"
        comment="正常"
        color={colorLevelForPercent(calcDisk(diskSpace))}
      />
      <Card
        content={`${calcMem(memData)}%`}
        title="内存"
        comment="正常"
        color={colorLevelForPercent(calcMem(memData))}
      />
      <Card
        content={`${cpuLoad}%`}
        title="CPU"
        comment="正常"
        color={colorLevelForPercent(cpuLoad)}
      />
      <Card
        content={`${pubNetDelay}ms`}
        title="公网"
        comment={pubNetAlive ? '已连接' : '未连接'}
      />
    </div>
  );
};

export default Home;
