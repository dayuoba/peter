export function convertPlatformName(osName: string): string {
  if (/win32/.test(osName)) return 'WINDOWS';
  if (/darwin/.test(osName)) return 'MAC';
  if (/linux/.test(osName)) return 'LINUX';

  return '';
}

export function isWindows(osName: string): boolean {
  return convertPlatformName(osName) === 'WINDOWS';
}

export function isMac(osName: string): boolean {
  return convertPlatformName(osName) === 'MAC';
}

export function isLinux(osName: string): boolean {
  return convertPlatformName(osName) === 'LINUX';
}
