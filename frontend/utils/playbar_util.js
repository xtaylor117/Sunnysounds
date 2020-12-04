export const formatSongTime = (time) => {
    let sec = Math.floor(parseFloat(time));
    let min = Math.floor(sec / 60);
    sec -= min * 60;

    sec < 10 ? sec = `0${sec}`: sec = `${sec}`;

    return `${min}:${sec}`;
}