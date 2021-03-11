import si from 'systeminformation';

// 获取当前的CPU负载情况
async function getCPULoad(): Promise<number> {
  return new Promise((resolve) => {
    si.currentLoad((data) => {
      resolve(data.currentLoad);
    });
  });
}

// async function getMemUsage() {
//   return si.mem();
// }

const sysInfo = {
  getCPULoad,
};

export default sysInfo;
