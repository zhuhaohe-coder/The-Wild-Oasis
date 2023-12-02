import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          description: {
            dashboard: "Dashboard",
            last7: "Last 7 days",
            last30: "Last 30 days",
            last90: "Last 90 days",
            bookings: "bookings",
            sales: "Sales",
            checkins: "check ins",
            occupancyRate: "occupancy rate",
            today: "Today",
            summary: "Stay duration summary",
            arriving: "arriving",
            departing: "departing",
            checkin: "Check in",
            checkout: "Check out",
            all: "All",
            unconfirmed: "Unconfirmed",
            discount: "With discount",
            unDiscount: "No discount",
          },
        },
      },
      zh: {
        translation: {
          description: {
            dashboard: "仪表盘",
            last7: "过去 7 天",
            last30: "过去 30 天",
            last90: "过去 90 天",
            bookings: "订单数量",
            sales: "销售额",
            checkins: "入住数量",
            occupancyRate: "入住率",
            today: "今日待办",
            summary: "入住时间统计",
            arriving: "即将到达",
            departing: "即将离开",
            checkin: "签入",
            checkout: "签出",
            all: "所有",
            unconfirmed: "未确认",
            discount: "有折扣",
            unDiscount: "无折扣",
          },
        },
      },
    },
  });
