try {
    const sizeGuidePopup = document.getElementsByClassName('popup-size-guide')[0] || document.getElementsByClassName('popup-size-chart')[0];

    // move sizeGuidePopup next to the element with class "legend-size"
    const legendSize = document.getElementsByClassName('legend-size')[0];
    legendSize.parentNode.insertBefore(sizeGuidePopup, legendSize.nextSibling);

} catch (error) {
    if (error instanceof TypeError) {
        // statements to handle TypeError exceptions
        console.log("TypeError: ", error);
    }
}