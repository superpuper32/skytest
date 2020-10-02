export const getTime = () => {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes() + 1;
    let s = now.getSeconds();

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    return `${h}:${m}:${s}`;
};