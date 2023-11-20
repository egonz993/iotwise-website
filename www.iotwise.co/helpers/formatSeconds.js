// From ChatGPT
export function formattedSeconds(seconds) {
    // Ensure seconds is a non-negative integer
    if (typeof seconds !== 'number' || seconds < 0 || !Number.isInteger(seconds)) {
      return "Invalid input";
    }
  
    // Calculate minutes and seconds
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
  
    // Format the result as "mm:ss"
    const formattedMinutes = String(minutes);
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  