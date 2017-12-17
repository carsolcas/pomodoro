function lpad(n) {
  return (`${n}`).padStart(2, '0');
}

function formatMinutes(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds - (min * 60);

  return `${lpad(min)}:${lpad(sec)}`;
}

function formatHours(seconds) {
  const hours = Math.floor(seconds / 3600);
  const min = Math.floor((seconds - (hours * 3600)) / 60);
  const sec = seconds - (hours * 3600) - (min * 60);

  return `${lpad(hours)}:${lpad(min)}:${lpad(sec)}`;
}

export { formatMinutes, formatHours };
export default formatMinutes;
