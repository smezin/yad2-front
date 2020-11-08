const STORAGE_PATH = process.env.REACT_APP_S3_ADS_STORAGE

export const ads = {
    "topAd": {"imgSrc":`${STORAGE_PATH}/large-ad-h.jpg`, "path":""},
    "sideAd": {"imgSrc": `${STORAGE_PATH}/side_ad.jfif`, "path":""},
    "feed-banner": {"imgSrc": `${STORAGE_PATH}/feed-banner.jpg`, "path":""}
}
export const topBoxesRow = {
    "movers": {"imgSrc": `${STORAGE_PATH}/movers.jfif`, "text": "הובלות", "path":""},
    "africaIsrael": {"imgSrc": `${STORAGE_PATH}/africaIsrael.jfif`, "text": "אפריקה ישראל", "path":"http://res.afi-g.com/pages/default.aspx"},
    "pandor": {"imgSrc": `${STORAGE_PATH}/pandor.jfif`, "text": "תנאים מיוחדים", "path": "https://www.pandoor.co.il/"},
    "azorim": {"imgSrc": `${STORAGE_PATH}/azorim.jfif`, "text": "לפרויקטים חדשים", "path":"https://www.azorim.co.il/"},
    "aura": {"imgSrc": `${STORAGE_PATH}/mura.jfif`, "text": "מיקומים מנצחים", "path":"https://www.yad2.co.il/realestate/newprojects/developer?company=194"},
    "tichonBuilders": {"imgSrc": `${STORAGE_PATH}/tichonBuilders.jfif`, "text": "פרויקטים חדשים", "path":"https://www.boh.co.il/"},
    "angloSaxon": {"imgSrc": `${STORAGE_PATH}/angloSaxon.jfif`, "text": "הבית של הנדל\"ן", "path":"https://www.anglo-saxon.co.il/"},
    "ashdar": {"imgSrc": `${STORAGE_PATH}/ashdar.jfif`, "text": "זה הבית שלי", "path":"https://www.ashdar.co.il/"},
}
export const feedSideAds = {
    "receiverAd": {"imgSrc": `${STORAGE_PATH}/feed-ad_receiver.jpg`, "path":""},
    "doorsAd": {"imgSrc": `${STORAGE_PATH}/feed-ad_doors.jpg`, "path":""},
    "realtorAd": {"imgSrc": `${STORAGE_PATH}/feed-ad_realtor.jpg`, "path":""},
    "renevateAd": {"imgSrc": `${STORAGE_PATH}/feed-ad_renevate.jpg`, "path":""}
}
