export function getFormattedFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];

    // Get power of 1024 to determine appropriate unit
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    // Calculate the value in the appropriate unit
    const value = parseFloat((bytes / Math.pow(k, i)).toFixed(2));

    return `${value} ${sizes[i]}`;
}

export const formatAudioTrackTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    if (minutes > 0) {
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    return `0:${remainingSeconds.toString().padStart(2, '0')}`;
};
