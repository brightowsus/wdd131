document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedEl = document.getElementById('lastModified');
    if (lastModifiedEl) lastModifiedEl.textContent = document.lastModified;

    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    const temperature = 8; // °C
    const windSpeed = 10;  // km/h

    function calculateWindChill(tempC, speedKmh) {
        return (
            13.12 +
            0.6215 * tempC -
            11.37 * Math.pow(speedKmh, 0.16) +
            0.3965 * tempC * Math.pow(speedKmh, 0.16)
        ).toFixed(1);
    }

    let windChillDisplay = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillDisplay = `${calculateWindChill(temperature, windSpeed)} °C`;
    }

    const windChillEl = document.getElementById('windChill');
    if (windChillEl) windChillEl.textContent = windChillDisplay;
});
