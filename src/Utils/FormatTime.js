export function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 100);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const remainingMilliseconds = milliseconds % 100;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}.${String(remainingMilliseconds).padStart(2, "0")}`;
}
