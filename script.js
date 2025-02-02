document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded. Waiting for user input.");
  translateContent();
  showNotWorkingSection();
});

const validCouponCodes = {
  BR4Q9: { video1: "u6hc_oMxafU", video2: "-66eMMbg4fg" }, //puppy
  93740: { video1: "u6hc_oMxafU", video2: "-66eMMbg4fg" }, //puppy
  VS87S: { video1: "l0qqdfx_4Ew", video2: "Ms9U9GJZ5Tg" }, //bear
  63826: { video1: "l0qqdfx_4Ew", video2: "Ms9U9GJZ5Tg" }, //bear
  40683: { video1: "n8GX6nDxZno", video2: "NONE" }, //reindeer
  92638: { video1: "Wx3HJAV7K2k", video2: "NONE" }, //snake
};

function showSubtitleInstructions() {
  const userLanguage = navigator.language.slice(0, 2);
  const supportedLanguages = ["en", "de", "es", "fr", "pl"];
  const language = supportedLanguages.includes(userLanguage)
    ? userLanguage
    : "en";

  console.log("System language:", navigator.language);
  console.log("Selected subtitle instruction language:", language);

  const subtitleInstructions = document.querySelectorAll(
    "[id^='subtitle-instructions-']"
  );
  subtitleInstructions.forEach((instruction) => {
    instruction.style.display = "none";
  });

  const instructionElement = document.getElementById(
    `subtitle-instructions-${language}`
  );
  if (instructionElement) {
    instructionElement.style.display = "block";
  } else {
    console.warn(
      `Subtitle instructions for "${language}" not found. Defaulting to English.`
    );
    document.getElementById("subtitle-instructions-en").style.display = "block";
  }
}

function validateCoupon() {
  const couponCode = document.getElementById("coupon-code").value.trim();
  const errorMessage = document.getElementById("error-message");
  const videoContainer = document.getElementById("video-container");
  const content = document.querySelector(".content");
  const welcomeImage = document.querySelector(".welcome-image");
  const videoFrame1 = document.getElementById("video-frame-1");
  const videoFrame2 = document.getElementById("video-frame-2");
  const video1Title = document.getElementById("video1-title");
  const video2Title = document.getElementById("video2-title");
  const returnButton = document.getElementById("return-button");
  const upperCaseCoupon = couponCode.toUpperCase();
  const notWorkingSection = document.getElementById("not-working-section"); // 获取 Not Working 部分

  if (validCouponCodes[upperCaseCoupon]) {
    const { video1, video2 } = validCouponCodes[upperCaseCoupon];

    errorMessage.textContent = "";
    content.style.display = "none";
    welcomeImage.style.display = "none";
    videoContainer.style.display = "block";
    video1Title.style.display = "block";
    videoFrame1.src = `https://www.youtube.com/embed/${video1}&cc_load_policy=1`;

    if (video2 && video2 !== "NONE") {
      video2Title.style.display = "block";
      videoFrame2.style.display = "block";
      videoFrame2.src = `https://www.youtube.com/embed/${video2}&cc_load_policy=1`;
    } else {
      video2Title.style.display = "none";
      videoFrame2.style.display = "none";
    }

    returnButton.style.display = "block";

    // 隐藏 Not Working 部分
    if (notWorkingSection) {
      notWorkingSection.style.display = "none";
    }

    // 调用字幕提示
    showSubtitleInstructions();
  } else {
    errorMessage.textContent = "Invalid coupon code. Please try again.";
  }
}
function translateContent() {
  const userLanguage = navigator.language.slice(0, 2);
  const supportedLanguages = ["en", "de", "es", "fr", "pl"];
  const language = supportedLanguages.includes(userLanguage)
    ? userLanguage
    : "en";

  console.log("System language:", navigator.language);
  console.log("Selected content language:", language);

  // 隐藏所有语言内容
  const translations = document.querySelectorAll(".translation");
  translations.forEach((translation) => {
    translation.style.display = "none";
  });

  // 显示对应语言的内容
  const contentElement = document.getElementById(`content-${language}`);
  if (contentElement) {
    contentElement.style.display = "block";
  } else {
    console.warn(`Content for "${language}" not found. Defaulting to English.`);
    document.getElementById("content-en").style.display = "block";
  }
}
function showNotWorkingSection() {
  const userLanguage = navigator.language.slice(0, 2);
  const supportedLanguages = ["en", "de", "es", "fr", "pl"];
  const language = supportedLanguages.includes(userLanguage)
    ? userLanguage
    : "en";

  console.log("System language for 'Not Working' section:", language);

  // 隐藏所有语言版本的 "Not Working" 部分
  const notWorkingSections = document.querySelectorAll(".not-working");
  notWorkingSections.forEach((section) => {
    section.style.display = "none";
  });

  // 显示对应语言的内容
  const notWorkingElement = document.getElementById(`not-working-${language}`);
  if (notWorkingElement) {
    notWorkingElement.style.display = "block";
  } else {
    console.warn(
      `"Not Working" content for "${language}" not found. Defaulting to English.`
    );
    document.getElementById("not-working-en").style.display = "block";
  }
}

function returnToMain() {
  const content = document.querySelector(".content");
  const welcomeImage = document.querySelector(".welcome-image");
  const videoContainer = document.getElementById("video-container");
  const notWorkingSection = document.getElementById("not-working-section"); // 获取 Not Working 部分

  const subtitleInstructions = document.querySelectorAll(
    "[id^='subtitle-instructions-']"
  );
  subtitleInstructions.forEach((instruction) => {
    instruction.style.display = "none";
  });

  content.style.display = "block";
  welcomeImage.style.display = "block";
  videoContainer.style.display = "none";
  // 显示 Not Working 部分
  if (notWorkingSection) {
    notWorkingSection.style.display = "block";
  }
}
