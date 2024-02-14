export function formatPercentage(value: number) {
  const rounded = Math.round(value * 1000) / 10; // 소수점 세 번째 자리에서 반올림
  return `${rounded}%`; // 백분율로 표시
}
