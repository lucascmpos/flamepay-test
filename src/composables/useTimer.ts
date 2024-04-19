export default function useTimer(expirationTime) {
  let remainingTime = expirationTime;

  const startTimer = () => {
    const startTime = Date.now();

    const updateRemainingTime = () => {
      const elapsedTimeInSeconds = Math.floor((Date.now() - startTime) / 1000);
      remainingTime = Math.max(0, expirationTime - elapsedTimeInSeconds);
    };

    updateRemainingTime();

    const timerInterval = setInterval(updateRemainingTime, 1000);

    return {
      getRemainingTime: () => remainingTime,
      stopTimer: () => clearInterval(timerInterval),
    };
  };

  return { startTimer };
}
