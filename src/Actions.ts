import os from 'os';
import ping, { PingResponse } from 'ping';
import si, { Systeminformation } from 'systeminformation';
import checkDiskSpace from 'check-disk-space';
import sysInfo from './native/sysinfo';
import { isWindows } from './lib/platform';
// import {type} from "os";

// interface IFetchCpuLoad {}
// eslint-disable-next-line import/prefer-default-export
export const FectchCpuLoad = async (): Promise<number> => {
  return sysInfo.getCPULoad();
};

export const PingPublicNetwork = async (): Promise<PingResponse> => {
  const host = 'api.cnuri.cn';
  return ping.promise.probe(host);
};

export const FetchOSInfo = (): string => {
  return os.platform();
};

export const FetchMemInfo = (): Promise<Systeminformation.MemData> => {
  return si.mem();
};

export const FetchDiskUsage = async (): Promise<checkDiskSpace.CheckDiskSpaceResult> => {
  const dir = isWindows(FetchOSInfo()) ? 'D:/' : '/';
  return checkDiskSpace(dir);
};
